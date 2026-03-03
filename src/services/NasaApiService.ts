import { ImagemNasa } from '../types/ImagemNasa';

export class NasaApiService {
  constructor(
    private baseUrl: string,
    private apiKey: string,
    private timeout: number = 10000 // milliseconds
  ) {}

  async getApod(date?: string): Promise<ImagemNasa> {
    const params = new URLSearchParams({ api_key: this.apiKey });
    if (date) {
      params.set('date', date);
    }

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.baseUrl}?${params.toString()}`, {
        signal: controller.signal,
      });
      clearTimeout(id);

      if (!response.ok) {
        throw new Error(`Erro ao acessar a API da NASA: ${response.statusText}`);
      }

      const data = await response.json();
      return this._normalizeResponse(data);
    } catch (e: any) {
      if (e.name === 'AbortError') {
        throw new Error('Requisição excedeu o tempo limite');
      }
      throw new Error(`Erro ao acessar a API da NASA: ${e}`);
    }
  }

  private _normalizeResponse(data: any): ImagemNasa {
    return {
      data: data.date,
      titulo: data.title,
      url: data.url ?? data.hdurl,
      descricao: data.explanation,
    };
  }
}
