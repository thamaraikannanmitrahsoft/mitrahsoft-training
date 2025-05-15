import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excel-status',
  templateUrl: './excel-status.component.html',
  styleUrl: './excel-status.component.scss'
})
export class ExcelStatusComponent implements OnInit {
  constructor(private toastr: ToastrService) {
  }
  ngOnInit() {
  }
  excelData: any[] = [];
  columnHeaders: string[] = [];
  onImport(event: any) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.toastr.error('Invalid credentials', '', {
        timeOut: 1000
      });
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const data = new Uint8Array(e.target!.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      this.excelData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
      this.columnHeaders = this.excelData.length ? Object.keys(this.excelData[0]) : [];
    };
    reader.readAsArrayBuffer(file);
  }
  onExport() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.excelData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const wbout: ArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    saveAs(blob, 'exported-data.xlsx');
  }
}