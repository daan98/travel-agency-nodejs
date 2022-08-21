import { Testimoniales } from "../models/testimonial.model.js";

const guardarTestimoniales = async (req, res) => {
    const { name, email, message } = req.body;
    const errors = [];

    // VALIDATING THERE ARE NO EMPTY FIELDS
    if(name.trim() === '') errors.push({ message: 'Nombre está vacio.', });

    if(email.trim() === '') errors.push({ message: 'Correo está vacio.', });

    if(message.trim() === '') errors.push({ message: 'Mensaje está vacio.', });

    console.log('errors: ', errors.length);
    if(errors.length > 0){ 
        console.log('Error at testimoniales.controller: ', errors);
        // SENDING ERRORS TO testimoniales.pug AND req.body INFORMATION TO KEEP IT ON REFRESH
        const testimoniales = await Testimoniales.findAll();
        
        res.render('testimoniales', {
            errors,
            name,
            email,
            message,
            testimoniales
        });
    } else{
        // SENDING INFORMATION TO DATABASE
        try {
            console.log('Enviando la información: ', req.body);
            await Testimoniales.create({
                name: name,
                email: email,
                message: message
            });
    
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
};

export{
    guardarTestimoniales,
}