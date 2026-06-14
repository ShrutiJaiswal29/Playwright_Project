export const logger={
    step(msg:string){
        console.log('[STEP]',msg)
    },
    info(msg:string){
        console.log('INFO',msg)
    },
    api(method:string, url: string, status:number, durationMs:number)
    {
        console.log('[API] ${method} ${url} | Status: ${status} | Time:${durationMs}ms');
        
    }
}