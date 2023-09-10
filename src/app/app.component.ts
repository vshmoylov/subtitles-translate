import { Component } from '@angular/core';
import srtParser2 from "srt-parser-2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public subtitles: any[] = JSON.parse(localStorage.getItem('subtitles')||'[]');
  public perPage = 100;
  public page: number = JSON.parse(localStorage.getItem('page')||'0');
  onChange(item: any, event: any){
    console.log("New translation", event.target.value, item);
    const el = this.subtitles.find(({id}) => id === item.id);
    el.rus = event.target.value;
    console.log(el, this.subtitles);
    this.saveLocal();
  }
  saveLocal(){
    localStorage.setItem('subtitles', JSON.stringify(this.subtitles));
    this.page = 0;
    localStorage.setItem('page', '0');
  }
  saveFile(){

    var parser = new srtParser2();
    const text = parser.toSrt(this.subtitles.map(el => ({...el, text: el.rus??el.text})));
    const pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', "rus.srt");
    pom.click();
  }
  selectFile = async () => new Promise<File>((res, rej) => {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    input.onchange = (e: any) => {
      res(e.target.files[0]);
      input.remove();
    }
    input.click();
  });
  async openFile(){
    const readFile = async (file: File) => new Promise<string>((res, rej) => {
      const reader = new FileReader();
      reader.addEventListener('load', event => res(event?.target?.result as string));
      reader.readAsText(file);
    });
    const file = await this.selectFile();
    const data = await readFile(file);
    var parser = new srtParser2();
    var subtitles = parser.fromSrt(data);
    console.log("File selected", file, subtitles);
    this.subtitles = subtitles;
    this.saveLocal();
  }

  ceil = Math.ceil;
  min = Math.min;

  currentItems(){
    return this.subtitles.slice(this.page*this.perPage, this.page*this.perPage + this.perPage);
  }
}
