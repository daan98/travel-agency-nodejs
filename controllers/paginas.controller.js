import { Testimoniales } from "../models/testimonial.model.js";
import { Viajes } from "../models/viaje.model.js";

const paginaInicio = async (req, res) => {
    let promise = [];
    promise.push(Viajes.findAll({limit: 4}));
    promise.push(Testimoniales.findAll({limit: 3}));
    try {
        const resultado = await Promise.all(promise);

        res.render('inicio', {
            page: 'Inicio',
            classes: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
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
    try {
        const testimoniales = await Testimoniales.findAll();
    
        res.render('testimoniales', {
            page: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.error("Error: ", error);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaContacto,
    paginaViajes,
    paginaTestimoniales,
    paginaViajeUnico
};