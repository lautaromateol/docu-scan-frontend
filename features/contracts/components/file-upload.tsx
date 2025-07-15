import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import { Upload, File, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileList } from "./file-list";

interface FileUploadProps {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

export function FileUpload({ files, setFiles }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const disabled = files.length === 1;

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    if (disabled) return;
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    handleFileSelect(droppedFiles);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const clearAllFiles = () => {
    setFiles([]);
  };

  return (
    <div className="space-y-6">
      {/* Upload Container */}
      <div
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer
          transition-all duration-300 ease-out
          ${
            isDragging
              ? "border-blue-500 bg-blue-50 scale-105 shadow-lg"
              : "border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50/50 hover:scale-102"
          }
          min-h-[300px] flex flex-col items-center justify-center
          group shadow-sm hover:shadow-md
        `}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          disabled={disabled}
          type="file"
          accept=".pdf,.docx,.txt"
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files)}
        />

        <div
          className={`
          transition-all duration-300 
          ${isDragging ? "scale-110" : "group-hover:scale-105"}
        `}
        >
          <div className="mb-6">
            <Upload
              size={64}
              className={`
                mx-auto transition-colors duration-300
                ${
                  isDragging
                    ? "text-blue-500"
                    : "text-gray-400 group-hover:text-blue-500"
                }
              `}
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {isDragging ? "Drop your files here!" : "Drop your files"}
          </h3>

          <p className="text-gray-500 mb-4">
            Drag and drop files here, or click to select
          </p>

          <div className="text-sm text-gray-400">
            Supported formats: PDF, DOCX, TXT
          </div>
        </div>

        {/* Animated background effect */}
        <div
          className={`
          absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
          ${isDragging ? "opacity-10" : ""}
          bg-gradient-to-r from-blue-500 to-purple-500
        `}
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <File size={20} />
              Selected files ({files.length})
            </h4>
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFiles}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <X size={16} className="mr-1" />
              Clear all
            </Button>
          </div>
          <FileList files={files} onRemove={removeFile} />
        </div>
      )}
    </div>
  );
}
