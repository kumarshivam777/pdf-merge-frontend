export interface FileItemData {
  id: string;
  name: string;
  size: number;
  sizeFormatted: string;
  typeCategory: 'PDF' | 'Word' | 'Excel' | 'Image';
  extension: string;
  rawFile?: File;
  previewUrl?: string;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formatted = parseFloat((bytes / Math.pow(k, i)).toFixed(1));
  return `${formatted} ${sizes[i]}`;
}

export function getFileTypeCategory(fileName: string): {
  typeCategory: 'PDF' | 'Word' | 'Excel' | 'Image';
  extension: string;
} {
  const ext = fileName.split('.').pop()?.toLowerCase() || '';

  if (ext === 'pdf') {
    return { typeCategory: 'PDF', extension: 'pdf' };
  }
  if (['doc', 'docx'].includes(ext)) {
    return { typeCategory: 'Word', extension: ext };
  }
  if (['xls', 'xlsx'].includes(ext)) {
    return { typeCategory: 'Excel', extension: ext };
  }
  if (['jpg', 'jpeg', 'png'].includes(ext)) {
    return { typeCategory: 'Image', extension: ext };
  }

  return { typeCategory: 'PDF', extension: ext || 'pdf' };
}

export function createFileItemFromNativeFile(file: File): FileItemData {
  const { typeCategory, extension } = getFileTypeCategory(file.name);
  return {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    name: file.name,
    size: file.size,
    sizeFormatted: formatFileSize(file.size),
    typeCategory,
    extension,
    rawFile: file,
  };
}

export const INITIAL_REFERENCE_FILES: FileItemData[] = [
  {
    id: 'ref-1',
    name: 'Application.pdf',
    size: 245 * 1024,
    sizeFormatted: '245 KB',
    typeCategory: 'PDF',
    extension: 'pdf',
  },
  {
    id: 'ref-2',
    name: 'Resume.docx',
    size: 118 * 1024,
    sizeFormatted: '118 KB',
    typeCategory: 'Word',
    extension: 'docx',
  },
  {
    id: 'ref-3',
    name: 'Marksheet.jpg',
    size: 780 * 1024,
    sizeFormatted: '780 KB',
    typeCategory: 'Image',
    extension: 'jpg',
  },
  {
    id: 'ref-4',
    name: 'ID Card.png',
    size: 642 * 1024,
    sizeFormatted: '642 KB',
    typeCategory: 'Image',
    extension: 'png',
  },
];

export const ACCEPTED_FILE_EXTENSIONS = '.pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png';
