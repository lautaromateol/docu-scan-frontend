import React from 'react';
import { File, X, FileText, Image, Music, Video, Archive } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
}

export const FileList: React.FC<FileListProps> = ({ files, onRemove }) => {
  const getFileIcon = (file: File) => {
    const type = file.type;
    const size = 20;
    
    if (type.startsWith('image/')) return <Image size={size} className="text-green-500" />;
    if (type.startsWith('video/')) return <Video size={size} className="text-red-500" />;
    if (type.startsWith('audio/')) return <Music size={size} className="text-purple-500" />;
    if (type.includes('pdf') || type.includes('document') || type.includes('text')) 
      return <FileText size={size} className="text-blue-500" />;
    if (type.includes('zip') || type.includes('rar') || type.includes('compressed')) 
      return <Archive size={size} className="text-orange-500" />;
    
    return <File size={size} className="text-gray-500" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-2">
      {files.map((file, index) => (
        <div
          key={`${file.name}-${index}`}
          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
        >
          <div className="flex-shrink-0">
            {getFileIcon(file)}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-700 truncate">
              {file.name}
            </p>
            <p className="text-xs text-gray-500">
              {formatFileSize(file.size)}
            </p>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(index)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-600 hover:text-red-700 hover:bg-red-50 p-1 h-auto"
          >
            <X size={16} />
          </Button>
        </div>
      ))}
    </div>
  );
};

