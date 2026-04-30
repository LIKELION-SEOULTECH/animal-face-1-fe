import api from './axios';
import type {
  ApiResponse,
  PokedexRes,
  AnalysisRes,
  PageAnalysisRes,
} from '@/types/collection';

export async function getMyPokedex(): Promise<PokedexRes> {
  const res = await api.get<ApiResponse<PokedexRes>>('/api/v1/pokedex');
  return res.data.data;
}

export async function getMyAnalysisList(
  page = 0,
  size = 10,
): Promise<PageAnalysisRes> {
  const res = await api.get<ApiResponse<PageAnalysisRes>>(
    `/api/v1/analysis/my?page=${page}&size=${size}`,
  );
  return res.data.data;
}

export async function getAnalysisById(id: number): Promise<AnalysisRes> {
  const res = await api.get<ApiResponse<AnalysisRes>>(
    `/api/v1/analysis/${id}`,
  );
  return res.data.data;
}