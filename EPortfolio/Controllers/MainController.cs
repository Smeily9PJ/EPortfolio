using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EPortfolio.Rules;

namespace EPortfolio.Controllers
{
    /// <summary>
    /// Controller de la page contact 
    /// </summary>
    [RoutePrefix("api/main")]
    public class MainController : ApiController
    {
        private MainRules MainRules = new MainRules();
        
        /// <summary>
        /// Récupération de la version dans le ficher de config
        /// </summary>
        /// <returns>La version</returns>
        [HttpGet]
        [ActionName("version")]
        public string GetMail()
        {
            return this.MainRules.GetVersion();
        }
        /// <summary>
        /// Récupération d'un parametre dans le ficher de config
        /// </summary>
        /// <param name="code">Code du paramètre à récupérer</param>
        /// <returns>La valeur du paramètre</returns>
        [HttpGet]
        [ActionName("parametre")]
        public string GetParametre(string code)
        {
            return this.MainRules.GetParametre(code);
        }
    }
}
