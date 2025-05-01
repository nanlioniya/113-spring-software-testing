#include "llvm/Passes/PassPlugin.h"
#include "llvm/Passes/PassBuilder.h"
#include "llvm/IR/IRBuilder.h"
#include "llvm/IR/Instructions.h"
#include "llvm/Support/raw_ostream.h"
#include "llvm/IR/Constants.h"
#include "llvm/IR/Function.h"
#include "llvm/IR/BasicBlock.h"
#include "llvm/IR/Value.h"

using namespace llvm;

namespace {
struct LLVMPass : public PassInfoMixin<LLVMPass> {
  PreservedAnalyses run(Module &M, ModuleAnalysisManager &MAM) {
    // 尋找 main 函數
    Function *MainFunc = M.getFunction("main");
    if (!MainFunc) {
      return PreservedAnalyses::all();
    }

    LLVMContext &Ctx = M.getContext();
    
    // 創建全局字符串常量 "deubg mode"
    Constant *DebugStr = ConstantDataArray::getString(Ctx, "deubg mode", true);
    GlobalVariable *DebugGV = new GlobalVariable(
        M, DebugStr->getType(), true, GlobalValue::PrivateLinkage, DebugStr, "debug_str");
    
    // 創建全局字符串常量 "hayaku... motohayaku!"
    Constant *HayakuStr = ConstantDataArray::getString(Ctx, "hayaku... motohayaku!", true);
    GlobalVariable *HayakuGV = new GlobalVariable(
        M, HayakuStr->getType(), true, GlobalValue::PrivateLinkage, HayakuStr, "hayaku_str");
    
    // 獲取 printf 函數
    FunctionType *PrintfTy = FunctionType::get(
        Type::getInt32Ty(Ctx), Type::getInt8PtrTy(Ctx), true);
    FunctionCallee PrintfFunc = M.getOrInsertFunction("printf", PrintfTy);
    
    // 在 main 函數入口處插入代碼
    BasicBlock &EntryBB = MainFunc->getEntryBlock();
    IRBuilder<> Builder(&EntryBB, EntryBB.getFirstInsertionPt());
    
    // 打印 "deubg mode"
    Value *FormatStr = Builder.CreateGlobalStringPtr("%s\n", "format");
    Value *GEPIndices[] = {
      ConstantInt::get(Type::getInt32Ty(Ctx), 0),
      ConstantInt::get(Type::getInt32Ty(Ctx), 0)
    };
    Value *DebugPtr = Builder.CreateInBoundsGEP(DebugGV->getValueType(), DebugGV, GEPIndices, "debug_str_ptr");
    Builder.CreateCall(PrintfFunc, {FormatStr, DebugPtr});
    
    // 創建常量 48763 (替換 argc)
    ConstantInt *MagicNum = ConstantInt::get(Type::getInt32Ty(Ctx), 48763);
    
    // 獲取 main 函數參數
    auto ArgIt = MainFunc->arg_begin();
    Argument *ArgC = &*ArgIt; // 第一個參數是 argc
    ++ArgIt;
    Argument *ArgV = &*ArgIt; // 第二個參數是 argv
    
    // 創建臨時變量存儲 48763
    AllocaInst *TempArgC = Builder.CreateAlloca(Type::getInt32Ty(Ctx), nullptr, "temp_argc");
    Builder.CreateStore(MagicNum, TempArgC);
    
    // 替換所有 argc 的使用
    for (auto UI = ArgC->use_begin(), UE = ArgC->use_end(); UI != UE;) {
      Use &U = *UI++;
      User *User = U.getUser();
      
      // 替換為從臨時變量加載的值
      Value *LoadedArgC = Builder.CreateLoad(Type::getInt32Ty(Ctx), TempArgC, "loaded_argc");
      U.set(LoadedArgC);
    }
    
    // 修改 argv[1]
    // 創建指向 "hayaku... motohayaku!" 的指針
    Value *HayakuPtr = Builder.CreateInBoundsGEP(HayakuGV->getValueType(), HayakuGV, GEPIndices, "hayaku_str_ptr");
    
    // 計算 argv[1] 的地址
    Value *IndexOne = ConstantInt::get(Type::getInt32Ty(Ctx), 1);
    Value *ArgVPtr = Builder.CreateGEP(ArgV->getType()->getPointerElementType(), ArgV, IndexOne, "argv_1_ptr");
    
    // 將 "hayaku... motohayaku!" 存入 argv[1]
    Builder.CreateStore(HayakuPtr, ArgVPtr);
    
    return PreservedAnalyses::none();
  }
};
}

// 註冊 Pass
extern "C" LLVM_ATTRIBUTE_WEAK ::llvm::PassPluginLibraryInfo
llvmGetPassPluginInfo() {
  return {
    LLVM_PLUGIN_API_VERSION, "LLVMPass", LLVM_VERSION_STRING,
    [](PassBuilder &PB) {
      PB.registerPipelineParsingCallback(
        [](StringRef Name, ModulePassManager &MPM,
           ArrayRef<PassBuilder::PipelineElement>) {
          if (Name == "llvm-pass") {
            MPM.addPass(LLVMPass());
            return true;
          }
          return false;
        });
      
      // 註冊為優化器的開始步驟
      PB.registerPipelineStartEPCallback(
        [](ModulePassManager &MPM, OptimizationLevel) {
          MPM.addPass(LLVMPass());
        });
    }
  };
}
