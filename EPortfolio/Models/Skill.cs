using System.Web.Http;

namespace EPortfolio.Models
{
    /// <summary>
    /// DTO des compétences
    /// </summary>
    public class Skill : ApiController
    {
        // Code des compétences => url
        public string Code { get; set; }

        // Nom complet de la compétence
        public string Name { get; set; }

        // Type de la compétence : H = humaine, T = Technique
        public string Type { get; set; }
    }
}
