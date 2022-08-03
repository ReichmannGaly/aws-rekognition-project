import AnonLog from "./AnonLog";

export function ProcessImage(file: File,callback: (res:ArrayBuffer) => void){
    AnonLog();
    new Response(file).arrayBuffer().then(res => callback(res));
}