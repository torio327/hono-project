/** @jsxImportSource hono/jsx */


import {Hono} from "hono";
import {Suspense} from "hono/jsx"
import {useState} from "hono/jsx/dom"
import {renderToReadableStream} from "hono/jsx/streaming";
import {handle} from "hono/vercel";


const app=new Hono();

app.post("*",async(c)=>{
    //paraseは解析。requestのbodyを解析する
    const body=await c.req.parseBody()
    const [counter, setCounter] = useState(0)
    console.log(counter)
    const stream=renderToReadableStream(
        <html>
            <head><title>Hello Hono</title></head>
        <body>
            <div>
                Hello {body.sentence}!
                <Suspense fallback={<div>Loading...</div>}>
                <FetchComponent/>
                </Suspense>
                <p>{counter}</p>
                <button onClick={()=>setCounter(counter+1)}>Plus</button>
                <button onClick={()=>setCounter(counter-1)}>Minus</button>
                </div>
            </body>
            </html>
    );
    return c.body(stream,{
        headers:{
            "Content-Type":"text/html; charset=UTF=8",
            "Transfer-Encoding":"chunked"
        }
    })
})

async function FetchComponent(){
    await new Promise((resolve)=>setTimeout(resolve,2000));
    return <div>Fetched!</div>
}

export const POST=handle(app)