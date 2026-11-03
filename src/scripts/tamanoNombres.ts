// src/scripts/tamanoNombres.ts
// El tamaño de "Novio & Novia" cuando van en un solo renglón: con nombres
// cortos ("Diego & Camila") queda el tamaño del diseño; con nombres largos
// ("Fernando & Valentina") se achica lo justo para no tocar los bordes.
//
// Está en un solo lugar a propósito: si cada componente lo calcula a su
// manera, el mismo nombre sale de tamaños distintos.

/**
 * @param novios  "Fernando & Valentina"
 * @param maximo  el tamaño del diseño, en cqw
 * @param ancho   cuánto entra a lo ancho: el tamaño que le toca a un nombre
 *                de una sola letra. Se divide por la cantidad de letras.
 * @returns el tamaño en cqw, nunca más grande que `maximo`
 */
export function tamanoNombres(novios: string, maximo: number, ancho: number) {
    const letras = novios.replace(/[\s&]/g, "").length;
    if (letras === 0) return maximo;
    return Math.min(maximo, Math.round((ancho / letras) * 10) / 10);
}
