import Nanny from "../models/nanny.model.js";

/** GET: http://localhost:3002/api/nanny/getNannies */
export async function getNannies(req, res) {
    try {
        const nannies = await Nanny.find({});
        if (!nannies) return res.status(501).send({ error: "Couldn't Find Nannies." });
        res.status(200).send({ data: nannies });
    } catch (e) {
        return res.status(404).send({ error: "Cannot Find Nanny Data." });
    }
}

/** GET: http://localhost:3002/api/nanny/getNanniesBySpecialization/Infants */
export async function getNanniesBySpecialization(req, res) {
    console.log("Specialities was called!");
    try {
        const { speciality } = req.params;
        const nannies = await Nanny.find({ specialities: speciality });
        if (!nannies) return res.status(501).send({ error: `Couldn't Find Nannies with ${speciality} specialization.` });
        console.log(nannies);
        res.status(200).send({ data: nannies });
    } catch (e) {
        return res.status(404).send({ error: "Data not found." });
    }
}

/** POST: http://localhost:3002/api/nanny/getNannies */
// export async function createNanny(req, res) {
//     try {
//         const nannies = await Nanny.find({});
//         if (!nannies) return res.status(501).send({ error: "Couldn't Find Nannies." });
//         console.log(nannies);
//         res.status(200).send(nannies.json());
//     } catch (e) {
//         return res.status(404).send({ error: "Cannot Find Nanny Data." });
//     }
// }

