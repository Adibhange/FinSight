"use client";

import { scanReceipt } from "@/actions/transaction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/use-fetch";
import { CameraIcon, Loader2Icon } from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

type Props = {
  onScanComplete: (data: any) => void;
};

const ReceiptScanner = ({ onScanComplete }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    loading: scanReceiptLoading,
    fn: scanReceiptFn,
    data: scannedData,
  } = useFetch(scanReceipt);

  const handleReceiptScan = async (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be less than 5MB");
      return;
    }

    await scanReceiptFn(file);
  };

  useEffect(() => {
    if (scannedData && !scanReceiptLoading) {
      onScanComplete(scannedData);
    }
  }, [scanReceiptLoading, scannedData]);

  return (
    <div>
      <Input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleReceiptScan(file);
        }}
      />

      <Button
        type="button"
        variant="outline"
        className="gradient h-10 w-full text-white transition-opacity hover:text-white hover:opacity-90"
        disabled={!!scanReceiptLoading}
        onClick={() => fileInputRef.current?.click()}
      >
        {scanReceiptLoading ? (
          <>
            <Loader2Icon className="mr-2 animate-spin" />
            <span>Scanning Receipt...</span>
          </>
        ) : (
          <>
            <CameraIcon className="mr-2" />
            <span>Scan Receipt with AI</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default ReceiptScanner;
