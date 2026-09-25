import { FileItemData } from '../utils/fileUtils';

export interface MergeResponse {
  success: boolean;
  message: string;
  fileName: string;
  totalFiles: number;
  totalSizeFormatted: string;
  timestamp: string;
}

/**
 * Placeholder merge service for frontend simulation.
 * This simulates the server-side merging workflow without making external network calls.
 * 
 * NOTE: The backend and actual file conversion system will be developed separately later.
 * DO NOT implement actual file conversion or real PDF generation here.
 */
// TODO: Connect this function to the real backend API later.
export async function mergeFiles(
  files: FileItemData[],
  onProgress?: (progress: number, stepText: string) => void
): Promise<MergeResponse> {
  if (!files || files.length === 0) {
    throw new Error('Please select at least one file to merge.');
  }

  // Simulation steps
  if (onProgress) onProgress(20, 'Preparing...');
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (onProgress) onProgress(65, 'Arranging document order...');
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (onProgress) onProgress(95, 'Finalizing single PDF...');
  await new Promise((resolve) => setTimeout(resolve, 400));

  if (onProgress) onProgress(100, 'Your files are ready.');

  const totalBytes = files.reduce((acc, f) => acc + f.size, 0);
  const totalKb = Math.round(totalBytes / 1024);

  return {
    success: true,
    message: 'Your files are ready.',
    fileName: 'merged_document.pdf',
    totalFiles: files.length,
    totalSizeFormatted: totalKb > 1024 ? `${(totalKb / 1024).toFixed(1)} MB` : `${totalKb} KB`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}
