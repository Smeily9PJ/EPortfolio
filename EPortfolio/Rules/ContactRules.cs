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
    public class ContactRules
    {
        private Logging Log = new Logging();
        
        /// <summary>
        /// Envoi un mail
        /// </summary>
        /// <param name="name">Nom de l'expéditeur</param>
        /// <param name="from">Mail de l'expéditeur</param>
        /// <param name="content">Contenu du mail</param>
        public void sendMail(string name, string from, string content)
        {
            this.Log.Info("DEBUT sendMail...");
            this.Log.Debug($"Paramètres : name = {name}, from = {from}, content = {content}", true);

            var smtp = ConfigurationManager.AppSettings["SMTP"];
            var to = ConfigurationManager.AppSettings["MAIL_TO"];

            // Création du mail
            var mail = new MailMessage
            {
                From = new MailAddress(from),
                Subject = "Portfolio - mail contact",
                Body = content,
                IsBodyHtml = true
            };
            
            mail.To.Add(to);

            // Initialisation du serveur smtp
            var SmtpServer = new SmtpClient
            {
                Host = smtp,
                UseDefaultCredentials = true
            };

            // Envoi du mail
            SmtpServer.Send(mail);

            // TODO : A retravailler
            // Attente de l'envoi du mail
            Thread.Sleep(10000);


            this.Log.Info("FIN sendMail.");
        }
    }
}