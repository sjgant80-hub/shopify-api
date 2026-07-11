import express from 'express';
const app = express();
app.use(express.json());
const UPSTREAM = process.env.UPSTREAM || 'https://{store_name}.myshopify.com/admin/api/2024-10';

app.get('/health', (_,res) => res.json({ ok:true, service:'shopify-api', routes:22 }));

app.get('/products.json', async (req, res) => {
  try {
    const upstream = new URL('/products.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/products.json', async (req, res) => {
  try {
    const upstream = new URL('/products.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/products/:product_id.json', async (req, res) => {
  try {
    const upstream = new URL('/products/{product_id}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/products/:product_id.json', async (req, res) => {
  try {
    const upstream = new URL('/products/{product_id}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/products/:product_id.json', async (req, res) => {
  try {
    const upstream = new URL('/products/{product_id}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/customers.json', async (req, res) => {
  try {
    const upstream = new URL('/customers.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/customers.json', async (req, res) => {
  try {
    const upstream = new URL('/customers.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/customers/:customer_id.json', async (req, res) => {
  try {
    const upstream = new URL('/customers/{customer_id}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/customers/:customer_id.json', async (req, res) => {
  try {
    const upstream = new URL('/customers/{customer_id}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/orders.json', async (req, res) => {
  try {
    const upstream = new URL('/orders.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/orders/:order_id.json', async (req, res) => {
  try {
    const upstream = new URL('/orders/{order_id}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/orders/:order_id.json', async (req, res) => {
  try {
    const upstream = new URL('/orders/{order_id}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/orders/:order_id/cancel.json', async (req, res) => {
  try {
    const upstream = new URL('/orders/{order_id}/cancel.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/inventory_items.json', async (req, res) => {
  try {
    const upstream = new URL('/inventory_items.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/inventory_levels.json', async (req, res) => {
  try {
    const upstream = new URL('/inventory_levels.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/locations.json', async (req, res) => {
  try {
    const upstream = new URL('/locations.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/webhooks.json', async (req, res) => {
  try {
    const upstream = new URL('/webhooks.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/webhooks.json', async (req, res) => {
  try {
    const upstream = new URL('/webhooks.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/webhooks/:webhook_id.json', async (req, res) => {
  try {
    const upstream = new URL('/webhooks/{webhook_id}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/shop.json', async (req, res) => {
  try {
    const upstream = new URL('/shop.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/collects.json', async (req, res) => {
  try {
    const upstream = new URL('/collects.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/custom_collections.json', async (req, res) => {
  try {
    const upstream = new URL('/custom_collections.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'shopify-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('shopify-api on :' + PORT));
