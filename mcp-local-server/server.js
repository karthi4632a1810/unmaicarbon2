/* global require, process */
const express = require('express')

const app = express()
const port = Number(process.env.PORT || 3000)

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ ok: true, server: 'local-mcp', timestamp: new Date().toISOString() })
})

app.post('/mcp', (req, res) => {
  const body = req.body ?? {}
  const id = body.id ?? null
  const method = body.method ?? 'unknown'

  // Minimal JSON-RPC compliant response for MCP connectivity checks.
  res.json({
    jsonrpc: '2.0',
    id,
    result: {
      ok: true,
      server: 'local-mcp',
      echoMethod: method,
      message: 'Local MCP endpoint is reachable.',
    },
  })
})

app.listen(port, () => {
  console.log(`Local MCP server listening on http://localhost:${port}/mcp`)
})
