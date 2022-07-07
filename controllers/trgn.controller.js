// const seno = x => Math.sin(x)
// const coseno = x => Math.cos(x)
// const tan = x => Math.tan(x)

const seno = (req,res) => res.json(Math.sin(parseFloat(req.params.id)))
const coseno = (req,res) => res.json(Math.cos(parseFloat(req.params.id)))
const tan = (req,res) => res.json(Math.tan(parseFloat(req.params.id)))
module.exports = 
{ 
    seno, coseno, tan
}