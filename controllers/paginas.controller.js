import { Testimoniales } from "../models/testimonial.model.js";
import { Viajes } from "../models/viaje.model.js";

const paginaInicio = (req, res) => {
    res.render('inicio', {
        page: 'Inicio',
    });
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        page: 'Nosotros',
    });
};

const paginaContacto = (req, res) => {
    res.render('contacto', {
        page: 'Contacto',
    });
};

const paginaViajes = async (req, res) => {

    const viajes = await Viajes.findAll();

    res.render('viajes', {
        page: 'Próximos viajes',
        viajes,
    });
};

const paginaViajeUnico = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viajes.findOne({ where : { slug }});

        res.render('viaje', {
            page: 'Información viaje',
            viaje,
        });        
    } catch (error) { console.log(error); }
};

const paginaTestimoniales = async (req, res) => {
    const testimoniales = await Testimoniales.findAll();
    
    res.render('testimoniales', {
        page: 'Testimoniales',
        testimoniales
    });
};

export {
    paginaInicio,
    paginaNosotros,
    paginaContacto,
    paginaViajes,
    paginaTestimoniales,
    paginaViajeUnico
};