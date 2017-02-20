using EPortfolio.Models;
using EPortfolio.Rules;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Xml;

namespace EPortfolio.Controllers
{
    /// <summary>
    /// Controller des compétences
    /// </summary>
    [RoutePrefix("api/skills")]
    public class SkillsController : ApiController
    {
        /*
        Skill[] skills = new Skill[]
        {
            new Skill {Code = "toto", Name = "Test toto comp", Type= "T" }
        };*/

        /// <summary>
        /// Rules des compétences
        /// </summary>
        private SkillsRules SkillsRules = new SkillsRules();

        /// <summary>
        /// Récupération de toutes les compétences
        /// </summary>
        /// <returns>La liste complète des compétences</returns>
        [HttpGet]
        [ActionName("all")]
        public IEnumerable<Skill> GetAllSkills()
        {
            return this.SkillsRules.GetAllSkills();
            //return skills;
        }

     /*   [HttpGet]
        [ActionName("spe")]
        public IHttpActionResult GetSkill(string code)
        {
            var skill = skills.FirstOrDefault(x => x.Code == code);
            if (skill == null)
            {
                return NotFound();
            }
            return Ok(skill);
        }

        [HttpPost]
        [ActionName("diplomes")]
        public List<Diplome> GetDiplome()
        {
            return this.SkillsRules.GetDiplome();
        }*/
    }
}
