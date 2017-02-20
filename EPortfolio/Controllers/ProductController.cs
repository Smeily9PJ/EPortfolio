using EPortfolio.Models;
using ProductsApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Xml;

namespace ProductsApp.Controllers
{
    public class ProductController : ApiController
    {
        Product[] products = new Product[]
        {
            new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 },
            new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M },
            new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M }
        };

        [HttpGet]
        [ActionName("all")]
        public IEnumerable<Product> GetAllProducts()
        {
            return products;
        }

        [HttpGet]
        [ActionName("spe")]
        public IHttpActionResult GetProduct(string id)
        {
            var product = products.FirstOrDefault((p) => p.Id.ToString() == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpGet]
        [ActionName("allDiplomes")]
        public List<Diplome> GetDiplome()
        {
            var listeDiplomes = new List<Diplome>();
            
            XmlTextReader reader = new XmlTextReader("Test.xml");

            Diplome diplome = null;

            while (reader.Read())
            {
                if (reader.NodeType == XmlNodeType.Element)
                {
                    switch (reader.Name)
                    {
                        case "diplome":
                            diplome = new Diplome();
                            break;
                        case "annee":
                            diplome.Annee = reader.Value;
                            break;
                        case "formation":
                            diplome.formation = reader.Value;
                            break;
                        case "localisation":
                            diplome.localisation = reader.Value;
                            break;
                        case "etablissement":
                            diplome.etablissement = reader.Value;
                            break;
                    }
                }
                else if (reader.NodeType == XmlNodeType.EndElement && reader.Name.Equals("diplome"))
                {
                    listeDiplomes.Add(diplome);
                }
            }

            return listeDiplomes;
        }
    }
}
