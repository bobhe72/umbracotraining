using System;
using LearningWebsite.Model;

namespace LearningWebsite.Repo
{
    public static class LinkDataSources
    {
        public static LinkModel GetCellFreeLinkModel()
        {
            var model = new LinkModel
            {
                Title = "What is ‘cell-free biotechnology’ and how could it revolutionize our lives?",
                ImageLink = "cell-free-large.jpg",
                ExternalLink = new Tuple<string, string>(
                    "The GLP aggregated and excerpted this blog/article to reflect the diversity of news, opinion, and analysis. Read full, original post: ",
                    "http://www.economist.com/news/science-and-technology/21721560-new-type-biological-engineering-should-speed-up-innovation-cell-free-biotech")
            };

            model.Details.Add("The stuff of life comes wrapped in tiny bags called cells. Inside are DNA molecules that carry the instructions for how to run the cell, to make it grow,…");
            model.Details.Add("It is a system that has worked well over the 4bn years that life has existed on Earth. To some biotechnologists, though, the cell is old hat. They approve of the machinery of DNA, RNA, ribosomes and proteins, which can be engineered to make useful chemicals, ranging from drugs to the building-blocks of plastics. But they want to get rid of the bags that contain it, retaining only the part of the protoplasmic “gloop” inside a cell needed to do their bidding.");
            model.Details.Add("In this way they hope to control, far more precisely than is possible by conventional genetic engineering (or even by improved methods of gene modification, such as CRISPR-Cas9, that are now being developed)…Cell-free biotechnology of this sort means no biochemical effort is wasted on running, growing or dividing any actual cells. The initial intention is to create a quicker way of finding the best genes for making a particular product. In the end, those working in the field aspire to the idea that cell-free production will equal mass production.");

            return model;

        }

        public static LinkModel GetAutomationLinkModel()
        {
            var model = new LinkModel
            {
                Title = "Taking Biotechnology to the Next Level With Automation",
                ImageLink = "automation-large.jpg",
                ExternalLink = new Tuple<string, string>(
                    "Read the orginal document in full: ",
                    "https://www.rdmag.com/article/2018/09/taking-biotechnology-next-level-automation")
            };

            model.Details.Add("Recent estimates indicate that the value of the global biotechnology market will exceed USD 775.2 billion by 2024, growing at an impressive CAGR of 9.9%. Biotechnology covers a variety of verticals, including bioagriculture, bioservices, bioindustrial and biopharmaceutical. The last of these makes up the lion’s share of the biotechnology market and is an area of growing investment.");
            model.Details.Add("Biopharmaceutical companies continue to be on the lookout for technological improvements to increase their efficiency and bring products to market quicker. Automation, and the integration of other technological systems via the Internet of Things (IoT) and analytics platforms like machine learning, will form a major part of the future of scientific laboratory work.");
            model.Details.Add("A particular area of focus is bioprocess development, where the conditions for the optimum production of a new drug product are developed. This is a time-consuming and complicated process that can be dramatically improved using modern software and informatics solutions. High throughput technologies such as microbioreactor systems are already recognized as valuable additions to development labs but there are still challenges to be overcome before these ‘islands of automation’ can be used to their full potential.");

            return model;

        }

        public static LinkModel GetCareerLinkModel()
        {
            var model = new LinkModel
            {
                Title = "Biotechnology as a career: Bio science and engineering technologies options available",
                ImageLink = "career-large.jpg",
                ExternalLink = new Tuple<string, string>(
                    "Read the orginal document in full: ",
                    "https://www.indiatoday.in/education-today/jobs-and-careers/story/biotechnology-329794-2016-07-18")
            };

            model.Details.Add("Biotechnology is an interdisciplinary subject which is a combination of biological sciences and engineering technologies. It involves the development of products and techniques through the use of living systems and organisms. The biological science includes research and development carried out in laboratories.");
            model.Details.Add("A student wanting to pursue biotechnology can either go for a BSc or a BTech degree. A BTech degree includes both the biological sciences and the engineering aspect of the subject,  A BSc degree is usually followed up with an MSc degree, which help the graduates work in labs as research assistants. A PhD degree is recommended to gain in depth understanding of the particular and to better the job prospects. Since biotechnology is a combination of multiple disciplines, it finds its application in various industries. Biotechnology students can find jobs in universities and research institutions as research scientists or assistants. They can also find employment in the marketing, research, production, sales and quality control departments of companies specialising in pharma, agriculture, food and beverage, animal husbandry, medicine and healthcare to name a few.");
            model.Details.Add("A student wishing to take up biotechnology must have a science background. The minimum eligibility is that the student should have finished class 12 with physics, chemistry, mathematics and biology as the required subjects. While there are some universities/institutions that require physics, chemistry and biology as the subject combination, some others might have physics, chemistry and mathematics as the combination.");

            return model;

        }
    }
}