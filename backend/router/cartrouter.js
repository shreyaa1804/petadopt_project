const express = require('express');
const router = express.Router();

const Cart = require('../models/cartModel');


// ADD TO CART

router.post('/add', async (req, res) => {

    try {

        const { user, pet } = req.body;

        // prevent duplicate items

        const existing = await Cart.findOne({ user, pet });

        if (existing) {
            return res.status(400).json({
                message: 'Pet already added to cart'
            });
        }

        const result = await Cart.create({
            user,
            pet
        });

        res.status(200).json(result);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: 'Something went wrong'
        });
    }
});


// GET USER CART

router.get('/getbyuser/:id', async (req, res) => {

    try {

        const result = await Cart.find({
            user: req.params.id
        }).populate('pet');

        res.status(200).json(result);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: 'Error fetching cart'
        });
    }
});


// REMOVE ITEM

router.delete('/remove/:id', async (req, res) => {

    try {

        const result = await Cart.findByIdAndDelete(req.params.id);

        res.status(200).json(result);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: 'Delete failed'
        });
    }
});

module.exports = router;