import express from "express";
import {
    paginaInicio,
    paginaNosotros,
    paginaContacto,
    paginaViajes,
    paginaTestimoniales,
    paginaViajeUnico
} from '../controllers/paginas.controller.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/contacto', paginaContacto);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaViajeUnico);

router.get('/testimoniales', paginaTestimoniales);

export default router;