using EPortfolio.App_Start;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading;
using System.Web;

namespace EPortfolio.Rules
{
    /// <summary>
    /// Rules de la page contact
    /// </summary>
    public class MainRules
    {
        private Logging Log = new Logging();
        
        /// <summary>
        /// Récupération d'un parametre dans le ficher de config
        /// </summary>
        /// <param name="name">Nom du paramètre à récupérer</param>
        /// <returns>La valeur du parametre</returns>
        public string GetParametre(string name)
        {
            this.Log.Info("DEBUT getParametre...");
            this.Log.Debug($"Paramètres : name = {name}", true);

            var parametre = ConfigurationManager.AppSettings[name];
            
            this.Log.Info("FIN getParametre.");

            return parametre;
        }

        /// <summary>
        /// Récupération de la version dans le ficher de config
        /// </summary>
        /// <returns>La version</returns>
        public string GetVersion()
        {
            this.Log.Info("DEBUT getVersion...");

            var version = ConfigurationManager.AppSettings["VERSION"];
            var env = ConfigurationManager.AppSettings["ENV"];
            var result = $"{env} - {version}";

            this.Log.Info("FIN getVersion.");

            return result;
        }
    }
}