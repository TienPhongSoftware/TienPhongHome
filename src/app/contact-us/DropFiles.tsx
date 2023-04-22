import React, { useState } from "react";
import Image from "next/image";

interface FileWithPreview extends File {
  preview: string;
}

function DropFileInput() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    const newFiles: FileWithPreview[] = Array.from(droppedFiles).map(
      (file: File) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    const totalFiles = [...files, ...newFiles];
    setFiles(totalFiles.slice(0, 5));
  }

  function handleCancel(index: number) {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  }
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const newFiles: FileWithPreview[] = Array.from(selectedFiles).map(
        (file: File) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      const totalFiles = [...files, ...newFiles];
      setFiles(totalFiles.slice(0, 5));
    }
  }
  function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024,
      dm = decimals < 0 ? 0 : decimals,
      sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <div
      className="w-full h-64 border-dashed border-[3px] border-gray-300 rounded-lg 
                 flex flex-col justify-center items-center 
                 text-gray-400 hover:text-gray-500 
                 hover:border-gray-400 cursor-pointer"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {files.length > 0 ? (
        <ul className="list-disc pl-4 overflow-y-auto">
          {files.map((file, index) => (
            <li key={index} className="flex flex-row items-center mb-4">
              <Image
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                className="w-10 h-10 rounded-md mr-2"
              />
              <span className="text-gray-600 flex-grow">
                {file.name} ({formatBytes(file.size)})
              </span>
              <button
                type="button"
                className="bg-red-500 text-white py-2 px-4 rounded ml-3"
                onClick={() => handleCancel(index)}
              >
                Hủy
              </button>
            </li>
          ))}
          <div className="grid text-center">
            <span>Drag & Drop Files Here or</span>
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              multiple
            />
            <button
              className="text-gray-600 hover:text-gray-500 mt-2 font-bold border-[3px] rounded-md p-3"
              onClick={(e) => {
                e.preventDefault();
                const fileInput =
                  document.querySelector<HTMLInputElement>(
                    'input[type="file"]'
                  );
                if (fileInput) fileInput.click();
              }}
            >
              Browse Files
            </button>
          </div>
        </ul>
      ) : (
        <>
          <span>Drag & Drop Files Here or</span>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            multiple
          />
          <button
            className="text-gray-600 hover:text-gray-500 mt-2 font-bold border-[3px] rounded-md p-3"
            onClick={(e) => {
              e.preventDefault();
              const fileInput =
                document.querySelector<HTMLInputElement>('input[type="file"]');
              if (fileInput) fileInput.click();
            }}
          >
            Browse Files
          </button>
        </>
      )}
    </div>
  );
}

export default DropFileInput;
