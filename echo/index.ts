import { copy } from "https://deno.land/std@0.154.0/streams/conversion.ts"
const listener = Deno.listen({ port: 7 })
console.log('listening on port 7')
for await (const conn of listener) {
  console.log((new Date()).toTimeString(), 'new connection')
  copy(conn, conn).finally(() => conn.close())
}