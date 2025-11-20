const express = require('express');
const router = express.Router();
const trackService = require('../service/trackService');

function errorResponse(err, details = []) {
  if (err && err.code) {
    return { error: 'ValidationError', code: err.code, details: details.length ? details : [{ field: err.field || null, message: err.message }] };
  }
  return { error: 'ServerError', code: 'INTERNAL', details: [{ message: err && err.message ? err.message : String(err) }] };
}

// POST /tracks
router.post('/tracks', async (req, res) => {
  try {
    const payload = req.body;
    const result = await trackService.create(payload);
    res.status(201).json(result);
  } catch (err) {
    res.status(err.code ? 400 : 500).json(errorResponse(err));
  }
});

// GET /tracks
router.get('/tracks', async (req, res) => {
  try {
    const list = await trackService.list();
    res.json(list);
  } catch (err) {
    res.status(500).json(errorResponse(err));
  }
});

// GET /tracks/:id
router.get('/tracks/:id', async (req, res) => {
  try {
    const t = await trackService.getById(req.params.id);
    if (!t) return res.status(404).json({ error: 'NotFound', code: 'TRACK_NOT_FOUND', details: [] });
    res.json(t);
  } catch (err) {
    res.status(500).json(errorResponse(err));
  }
});

// PUT /tracks/:id
router.put('/tracks/:id', async (req, res) => {
  try {
    const updated = await trackService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'NotFound', code: 'TRACK_NOT_FOUND', details: [] });
    res.json(updated);
  } catch (err) {
    res.status(err.code ? 400 : 500).json(errorResponse(err));
  }
});

// DELETE /tracks/:id
router.delete('/tracks/:id', async (req, res) => {
  try {
    const ok = await trackService.remove(req.params.id);
    if (!ok) return res.status(404).json({ error: 'NotFound', code: 'TRACK_NOT_FOUND', details: [] });
    res.status(204).send();
  } catch (err) {
    res.status(500).json(errorResponse(err));
  }
});

module.exports = router;
