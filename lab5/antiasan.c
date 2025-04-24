#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "antiasan.h"

#define SHADOW_SCALE 3
#define SHADOW_OFFSET 0x7fff8000

unsigned long get_shadow_memory(unsigned long addr) {
    return ((addr >> SHADOW_SCALE) + SHADOW_OFFSET);
}

void antiasan(unsigned long addr) {
    // Calculate the shadow memory address for the target address
    unsigned long shadow_addr = get_shadow_memory(addr);
    
    // Get page size
    unsigned long page_size = 0x1000;
    
    // Mark the shadow memory region as accessible
    unsigned long start = shadow_addr & ~(page_size - 1);
    
    // Modify memory permissions to make it readable and writable
    char *shadow_ptr = (char *)start;
    
    // Set the value in shadow memory to 0, indicating the region is fully accessible
    for (int i = 0; i < page_size; i++) {
        shadow_ptr[i] = 0;
    }
}
