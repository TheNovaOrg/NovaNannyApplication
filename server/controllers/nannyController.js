import Nanny from "../models/nanny.model.js";

/** GET: http://localhost:3002/api/nanny/getNannies */
export async function getNannies(req, res) {
    try {
        const nannies = await Nanny.find({}).populate("reviews");
        if (!nannies) return res.status(501).send({ error: "Couldn't Find Nannies." });
        res.status(200).send({ data: nannies });
    } catch (e) {
        return res.status(404).send({ error: "Cannot Find Nanny Data." });
    }
}

/** GET: http://localhost:3002/api/nanny/getNanny/:nannyId */
export async function getNanny(req, res) {
    console.log("Get Nanny was called!");
    try {
        const { nannyId } = req.params;
        const nanny = await Nanny.findById(nannyId).populate("reviews").exec();
        if (!nanny) return res.status(501).send({ error: "Couldn't Find Nanny." });
        res.status(200).send({ data: nanny });
    } catch (e) {
        return res.status(404).send({ error: "Cannot Find Nanny Data." });
    }
}

/** GET: http://localhost:3002/api/nanny/getNanniesBySpecialization/:Infants */
export async function getNanniesBySpecialization(req, res) {
    try {
        const { speciality } = req.params;
        console.log(req.params);
        const nannies = await Nanny.find({ specialities: speciality });
        if (!nannies) return res.status(501).send({ error: `Couldn't Find Nannies with ${speciality} specialization.` });
        console.log(nannies);
        res.status(200).send({ data: nannies });
    } catch (e) {
        return res.status(404).send({ error: "Data not found." });
    }
}

/** GET: http://localhost:3002/api/nanny/getNanniesByPriceRange/30 */
export async function getNanniesByPriceRange(req, res) {
    try {
        const { priceRange } = req.params;
        const nannies = await Nanny.find({ "price": { $lte: priceRange } });
        if (!nannies) return res.status(501).send({ error: `Couldn't Find Nannies for the specified price range.` });
        console.log(nannies);
        res.status(200).send({ data: nannies });
    } catch (e) {
        return res.status(404).send({ error: "Data not found." });
    }
}

/** POST: http://localhost:3002/api/nanny/create */
export async function createNanny(req, res) {
    console.log("Create Nanny was called!");
    try {
        const nanny = new Nanny(req.body);
        // nanny.image = {
        //     path: req.files.path,
        //     filename: req.files.filename
        // };
        await nanny.save();
        res.status(201).send("Nanny created successfully!");
    } catch (e) {
        return res.status(500).send({ error: "Something went wrong creating Nanny.", msg: e.toString() });
    }
}

/** PUT: http://localhost:3002/api/nanny/:nannyId */
export async function updateNanny(req, res) {
    try {
        const { nannyId } = req.params;
        const nanny = await Nanny.findByIdAndUpdate(nannyId, { ...req.body });
        await nanny.save();
        res.status(201).send("Nanny updated successfully!");
    } catch (e) {
        return res.status(500).send({ error: "Something went wrong updating Nanny.", msg: e.message });
    }
};

/** DELETE: http://localhost:3002/api/nanny/:nannyId */
export async function deleteNanny(req, res) {
    try {
        const { nannyId } = req.params;
        await Nanny.findByIdAndDelete(nannyId);
        res.status(200).send("Nanny deleted successfully!");
    } catch (e) {
        return res.status(500).send({ error: "Something went wrong deleting Nanny." });
    }
};


