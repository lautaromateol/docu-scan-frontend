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
              ? "border-primary bg-primary/10 scale-105 shadow-glow"
              : "border-border bg-card hover:border-primary/50 hover:bg-primary/5"
          }
          min-h-[300px] flex flex-col items-center justify-center
          group shadow-card hover:shadow-modal
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
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary"
                }
              `}
            />
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-2">
            {isDragging ? "Drop your files here!" : "Drop your files"}
          </h3>

          <p className="text-muted-foreground mb-4">
            Drag and drop files here, or click to select
          </p>

          <div className="text-sm text-muted-foreground">
            Supported formats: PDF, DOCX, TXT
          </div>
        </div>

        {/* Animated glow effect */}
        <div
          className={`
          absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
          ${isDragging ? "opacity-100" : ""}
          bg-gradient-to-r from-primary/5 to-info/5
        `}
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="bg-card rounded-xl shadow-card border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <File size={20} />
              Selected files ({files.length})
            </h4>
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFiles}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
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
