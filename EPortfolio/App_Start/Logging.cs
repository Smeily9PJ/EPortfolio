using log4net;
using log4net.Config;
using log4net.Repository.Hierarchy;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace EPortfolio.App_Start
{
    /// <summary>
    /// Classe gérant le logging du back office dans un fichier de log
    /// </summary>
    public class Logging
    {
        private static bool DebugMode;

        /// <summary>
        /// Initialisation du logueur
        /// </summary>
        public Logging()
        {
            XmlConfigurator.Configure();
            var debug = ConfigurationManager.AppSettings["DEBUG"];
            DebugMode = debug != null && debug == "1";
        }

        /// <summary>
        /// Return the caller type by depilling the Stack trace
        /// </summary>
        /// <returns></returns>
        private static Type GetCallerType()
        {
            StackFrame[] stackFrames = new StackTrace().GetFrames();
            foreach (StackFrame stackFrame in stackFrames)
            {
                if (stackFrame.GetMethod().DeclaringType != typeof(Logging))
                    return stackFrame.GetMethod().DeclaringType;
            }
            return null;
        }

        /// <summary>
        /// Loguer en statut debug
        /// </summary>
        /// <param name="message">Le message à logger</param>
        /// <param name="debug">SI true : logueur que si en mode debug, sinon loguer tout le temps</param>
        public void Debug(string message, bool debug = false)
        {
            if ((debug && DebugMode) || !debug)
            {
                LogManager.GetLogger(GetCallerType()).Debug(message);
            }
        }

        /// <summary>
        /// Loguer en statut Info
        /// </summary>
        /// <param name="message">Le message à logger</param>
        /// <param name="debug">SI true : logueur que si en mode debug, sinon loguer tout le temps</param>
        public void Info(string message, bool debug = false)
        {
            if ((debug && DebugMode) || !debug)
            {
                LogManager.GetLogger(GetCallerType()).Info(message);
            }
        }

        /// <summary>
        /// Loguer en statut Warn
        /// </summary>
        /// <param name="message">Le message à logger</param>
        /// <param name="debug">SI true : logueur que si en mode debug, sinon loguer tout le temps</param>
        public void Warn(string message, bool debug = false)
        {
            if ((debug && DebugMode) || !debug)
            {
                LogManager.GetLogger(GetCallerType()).Warn(message);
            }
        }

        /// <summary>
        /// Loguer en statut Error
        /// </summary>
        /// <param name="message">Le message à logger</param>
        /// <param name="exception">L'exception qui accompagne le message</param>
        /// <param name="debug">SI true : logueur que si en mode debug, sinon loguer tout le temps</param>
        public void Error(string message, Exception exception = null,  bool debug = false)
        {
            if ((debug && DebugMode) || !debug)
            {
                if (exception == null)
                {
                    LogManager.GetLogger(GetCallerType()).Error(message);
                }
                else
                {
                    LogManager.GetLogger(GetCallerType()).Error(message, exception);
                }
            }
        }

        /// <summary>
        /// Loguer en statut Fatal
        /// </summary>
        /// <param name="message">Le message à logger</param>
        /// <param name="exception">L'exception qui accompagne le message</param>
        /// <param name="debug">SI true : logueur que si en mode debug, sinon loguer tout le temps</param>
        public void Fatal(string message, Exception exception = null, bool debug = false)
        {
            if ((debug && DebugMode) || !debug)
            {
                if (exception == null)
                {
                    LogManager.GetLogger(GetCallerType()).Fatal(message);
                }
                else
                {
                    LogManager.GetLogger(GetCallerType()).Fatal(message, exception);
                }
            }
        }
    }
}