using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EPortfolio.Models;
using System.Xml;
using EPortfolio.App_Start;

namespace EPortfolio.Rules
{
    /// <summary>
    /// Rules des compétences
    /// </summary>
    public class SkillsRules
    {
        /// <summary>
        /// Gestion des logs
        /// </summary>
        private Logging Log = new Logging();

        /// <summary>
        /// Récupération de toutes les compétences
        /// </summary>
        /// <returns>La liste des compétences</returns>
        public List<Models.Skill> GetAllSkills()
        {
            XmlTextReader reader = new XmlTextReader("../App_Data/Data.xml");

            while (reader.Read())
            {
                switch (reader.NodeType)
                {
                    case XmlNodeType.Element: // The node is an element.
                        Console.Write("<" + reader.Name);
                        Console.WriteLine(">");
                        break;
                    case XmlNodeType.Text: //Display the text in each element.
                        Console.WriteLine(reader.Value);
                        break;
                    case XmlNodeType.EndElement: //Display the end of the element.
                        Console.Write("</" + reader.Name);
                        Console.WriteLine(">");
                        break;
                }
            }

            return null;
        }

        /*
        public List<Diplome> GetDiplome()
        {
            var listeDiplomes = new List<Diplome>();

            XmlTextReader reader = new XmlTextReader("C:/Users/frus65847/perso/EPortfolio/EPortfolio/App_Data/Test.xml");

            Diplome diplome = null;

            string valeurAttendue = "annee";

            while (reader.Read())
            {
                switch (reader.NodeType)
                {
                    case XmlNodeType.Element:
                        switch (reader.Name)
                        {
                            case "diplome":
                                diplome = new Diplome();
                                break;
                            case "annee":
                            case "formation":
                            case "localisation":
                            case "etablissement":
                                valeurAttendue = reader.Name;
                                break;
                        }
                        if (reader.Name.Equals("diplome"))
                        {
                            diplome = new Diplome();
                        }
                        break;
                    case XmlNodeType.EndElement:
                        if (reader.Name.Equals("diplome"))
                        {
                            listeDiplomes.Add(diplome);
                        }
                        break;
                    case XmlNodeType.Text:
                        switch (valeurAttendue)
                        {
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
                        break;
                }
            }

            reader.Close();
            reader.Dispose();

            return listeDiplomes;
        }*/
    }
}