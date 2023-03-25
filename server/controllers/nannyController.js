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

