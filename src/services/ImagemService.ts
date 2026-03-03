/**
 * Save a blob to the user's machine by triggering a download.
 *
 * @param blob - The file data as a Blob
 * @param nomeArquivo - Desired filename for the download
 */
export function salvarImagem(blob: Blob, nomeArquivo: string): void {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

/**
 * Extracts the filename portion from a URL.
 */
export function obterNomeArquivoDaUrl(url: string): string {
    try {
        const pathname = new URL(url).pathname;
        return pathname.substring(pathname.lastIndexOf('/') + 1) || '';
    } catch {
        const parts = url.split('/');
        return parts[parts.length - 1] || '';
    }
}

/**
 * Downloads an image from the given URL and optionally triggers a save.
 * Returns the image as a Blob.
 */
export async function baixarImagem(
    url: string,
    data: string,
    title: string,
    timeout: number = 10000
): Promise<Blob> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);

        if (!response.ok) {
            throw new Error(`Erro ao baixar a imagem: ${response.statusText}`);
        }

        const blob = await response.blob();
        const nomeArquivo = `${data}_${title}_${obterNomeArquivoDaUrl(url)}`;
        console.log(`Baixando imagem: ${nomeArquivo}`);
        salvarImagem(blob, nomeArquivo);
        return blob;
    } catch (e: any) {
        if (e.name === 'AbortError') {
            throw new Error('Requisição excedeu o tempo limite');
        }
        throw new Error(`Erro ao baixar a imagem: ${e}`);
    }
}
