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
    public class ContactController : ApiController
    {
        private ContactRules ContactRules = new ContactRules();

        /// <summary>
        /// Construction du controller de la page contact
        /// </summary>
        /// <param name="contactRules">Rules de la page contact</param>
       /* public ContactController(ContactRules contactRules)
        {
            this.ContactRules = contactRules;
        }*/

        /// <summary>
        /// get un mail
        /// </summary>
        [HttpGet]
        [ActionName("getMail")]
        public string GetMail(string a)
        {
           return "juliepelissou@laposte.net";
        }

        /// <summary>
        /// Envoi un mail
        /// </summary>
        /// <param name="name">Nom de l'expéditeur</param>
        /// <param name="from">Mail de l'expéditeur</param>
        /// <param name="content">Contenu du mail</param>
        [HttpGet]
        [ActionName("sendMail/{name:string}/{from:string}/{content:string}")]
        public void SendMail(string name, string from, string content)
        {
            this.ContactRules.sendMail(name, from, content);
        }
    }
}
