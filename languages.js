document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("languageButton");
    const dropdown = document.getElementById("languageDropdown");
    const currentLanguage = document.getElementById("currentLanguage");

    if (!button || !dropdown || !currentLanguage) {
        console.error("Sélecteur de langue introuvable. Vérifiez les identifiants HTML.");
        return;
    }

    // Traductions : Français vers Anglais et Chinois
    const translations = {
        en: {
            "Accueil": "Home",
            "À propos": "About us",
            "Nos services": "Our services",
            "Nos projets": "Our projects",
            "Notre présence": "Our presence",
            "Galerie": "Gallery",
            "Contact": "Contact",
            "GAO HOUSING SARL · RÉPUBLIQUE DÉMOCRATIQUE DU CONGO": "GAO HOUSING SARL · DEMOCRATIC REPUBLIC OF THE CONGO",
            "Construire des opportunités.": "Building opportunities.",
            "Créer de la valeur durable.": "Creating sustainable value.",
            "Le meilleur pour l'immobilier, le conseil juridique et les services miniers.": "The best in real estate, legal consulting and mining services.",
            "Découvrir nos services": "Discover our services",
            "Nous contacter": "Contact us",
            "QUI SOMMES-NOUS ?": "WHO ARE WE?",
            "Société à responsabilité limitée": "Limited liability company",
            "Nos engagements": "Our commitments",
            "Professionnalisme": "Professionalism",
            "Une approche structurée, rigoureuse et orientée vers les résultats.": "A structured, rigorous and results-oriented approach.",
            "Conformité et transparence": "Compliance and transparency",
            "Des prestations qui tiennent compte des exigences légales et réglementaires applicables en RDC.": "Services that take into account the legal and regulatory requirements applicable in the DRC.",
            "Vision multisectorielle": "Multisectoral vision",
            "Des solutions complémentaires dans l'immobilier, le juridique et le secteur minier.": "Complementary solutions in real estate, legal services and the mining sector.",
            "L'EXCELLENCE AU SERVICE DE VOS PROJETS": "EXCELLENCE AT THE SERVICE OF YOUR PROJECTS",
            "Excellence. Vision. Développement.": "Excellence. Vision. Development.",
            "NOS DOMAINES D'EXPERTISE": "OUR AREAS OF EXPERTISE",
            "Des solutions pour vos projets": "Solutions for your projects",
            "GAO HOUSING développe des prestations complémentaires dans trois secteurs d'activité stratégiques.": "GAO HOUSING provides complementary services in three strategic business sectors.",
            "Immobilier & Construction": "Real Estate & Construction",
            "Intermédiation immobilière, promotion, gestion de biens, rénovation et construction de bâtiments commerciaux et résidentiels.": "Real estate brokerage, promotion, property management, renovation and construction of commercial and residential buildings.",
            "Demander un accompagnement →": "Request assistance →",
            "Études & Conseil juridique": "Legal Studies & Consulting",
            "Études de faisabilité, audit contractuel, accompagnement réglementaire, droit OHADA et conseil en investissements.": "Feasibility studies, contract audits, regulatory support, OHADA law and investment consulting.",
            "Fournitures & Services miniers": "Mining Supplies & Services",
            "Fourniture spécialisée de biens, équipements et solutions destinés aux entreprises du secteur minier.": "Specialized supply of goods, equipment and solutions for companies in the mining sector.",
            "IMMOBILIER & DÉVELOPPEMENT": "REAL ESTATE & DEVELOPMENT",
            "Nos projets immobiliers": "Our Real Estate Projects",
            "Découvrez les réalisations, opportunités et projets immobiliers présentés dans notre portefeuille.": "Discover the properties, opportunities and real estate projects featured in our portfolio.",
            "PROJET IMMOBILIER": "REAL ESTATE PROJECT",
            "Une vision moderne de l'habitat à Lubumbashi": "A modern vision of living in Lubumbashi",
            "PRÉSENTATION": "OVERVIEW",
            "Projet immobilier": "Real estate project",
            "Chanson Apartments – Lubumbashi": "Chanson Apartments – Lubumbashi",
            "Découvrez ce projet résidentiel à travers ses visuels, ses espaces, ses plans architecturaux et ses caractéristiques.": "Discover this residential project through its visuals, spaces, architectural plans and features.",
            "DÉVELOPPEMENT": "DEVELOPMENT",
            "Vision immobilière": "Real estate vision",
            "GAO HOUSING s'intéresse aux opportunités immobilières et aux projets de construction qui contribuent au développement urbain et économique de la République démocratique du Congo.": "GAO HOUSING focuses on real estate opportunities and construction projects that contribute to the urban and economic development of the Democratic Republic of the Congo.",
            "ACCOMPAGNEMENT": "SUPPORT",
            "Votre projet, notre priorité": "Your project, our priority",
            "Nous privilégions une approche fondée sur l'analyse des besoins, la recherche d'opportunités et l'accompagnement professionnel des projets.": "We prioritize an approach based on needs analysis, opportunity research and professional project support.",
            "GAO HOUSING — Des projets, des perspectives, de la valeur.": "GAO HOUSING — Projects, perspectives and value.",
            "NOS BASES OPÉRATIONNELLES": "OUR OPERATIONAL BASES",
            "Présents en RDC": "Present in the DRC",
            "Nos activités s'organisent notamment autour de Kolwezi et Lubumbashi.": "Our activities are primarily organized around Kolwezi and Lubumbashi.",
            "NOS IMPLANTATIONS": "OUR LOCATIONS",
            "Kolwezi & Lubumbashi": "Kolwezi & Lubumbashi",
            "Lualaba et Haut-Katanga, République démocratique du Congo.": "Lualaba and Haut-Katanga, Democratic Republic of the Congo.",
            "UNE PRÉSENCE AU CŒUR DES OPPORTUNITÉS": "A PRESENCE AT THE HEART OF OPPORTUNITIES",
            "GALERIE VISUELLE": "IMAGE GALLERY",
            "Nos références en images": "Our work in pictures",
            "Une sélection de visuels illustrant les domaines d'intervention et les opportunités de développement.": "A selection of images illustrating our areas of activity and development opportunities.",
            "Architecture & immobilier": "Architecture & Real Estate",
            "Construction & infrastructures": "Construction & Infrastructure",
            "Projets résidentiels": "Residential Projects",
            "Conception & aménagement": "Design & Development",
            "Solutions professionnelles": "Professional Solutions",
            "Développement & réalisations": "Development & Achievements",
            "Perspectives & opportunités": "Perspectives & Opportunities",
            "ESPACE ARCHITECTURE": "ARCHITECTURE SECTION",
            "Plans & espaces architecturaux": "Architectural Plans & Spaces",
            "Découvrez les différentes configurations architecturales présentées dans notre galerie.": "Discover the various architectural layouts featured in our gallery.",
            "Appartement 3 chambres": "3-bedroom apartment",
            "Appartement 2 chambres": "2-bedroom apartment",
            "Duplex prestige 5 chambres": "Prestige 5-bedroom duplex",
            "Les visuels et caractéristiques de cette section sont à confirmer selon le projet immobilier concerné.": "The images and features in this section are to be confirmed according to the relevant real estate project.",
            "NOTRE COUVERTURE": "OUR COVERAGE",
            "Une présence à l'échelle nationale": "A nationwide presence",
            "GAO HOUSING vise à accompagner les opportunités dans les différentes régions de la RDC.": "GAO HOUSING aims to support opportunities in the different regions of the DRC.",
            "Grand Katanga & ceinture minière": "Greater Katanga & Mining Belt",
            "Lualaba, Haut-Katanga, Haut-Lomami et Tanganyika.": "Lualaba, Haut-Katanga, Haut-Lomami and Tanganyika.",
            "Kinshasa": "Kinshasa",
            "Capitale et centre institutionnel, économique et administratif.": "Capital and institutional, economic and administrative center.",
            "Espace Kasaï": "Kasai Region",
            "Kasaï-Central, Kasaï-Oriental, Kasaï, Lomami et Sankuru.": "Kasai-Central, Kasai-Oriental, Kasai, Lomami and Sankuru.",
            "Est & Grand Kivu": "East & Greater Kivu",
            "Nord-Kivu, Sud-Kivu, Maniema et Ituri.": "North Kivu, South Kivu, Maniema and Ituri.",
            "Espace Équateur": "Equateur Region",
            "Équateur, Tshuapa, Mongala, Nord-Ubangi et Sud-Ubangi.": "Equateur, Tshuapa, Mongala, North Ubangi and South Ubangi.",
            "Grand Orient": "Greater East",
            "Tshopo, Bas-Uele et Haut-Uele.": "Tshopo, Bas-Uele and Haut-Uele.",
            "Grand Ouest": "Greater West",
            "Kongo-Central, Kwilu, Kwango et Mai-Ndombe.": "Kongo-Central, Kwilu, Kwango and Mai-Ndombe.",
            "DIMENSION INTERNATIONALE": "INTERNATIONAL DIMENSION",
            "Au-delà des frontières": "Beyond borders",
            "Des perspectives régionales et internationales": "Regional and international perspectives",
            "GAO HOUSING s'intéresse aux opportunités de coopération et de développement à l'échelle régionale et internationale.": "GAO HOUSING is interested in cooperation and development opportunities at regional and international levels.",
            "Corridor de Lobito & SADC": "Lobito Corridor & SADC",
            "Opportunités économiques, logistiques et commerciales en Afrique australe.": "Economic, logistical and commercial opportunities in Southern Africa.",
            "Afrique centrale et occidentale": "Central and West Africa",
            "Perspectives de coopération avec les marchés de la région.": "Cooperation opportunities with regional markets.",
            "Partenariats internationaux": "International Partnerships",
            "Recherche de collaborations en Afrique, en Europe et à l'échelle mondiale.": "Seeking collaborations in Africa, Europe and worldwide.",
            "Une vision ouverte sur le monde.": "A vision open to the world.",
            "CONTACTEZ-NOUS": "CONTACT US",
            "Parlons de votre prochain projet": "Let's talk about your next project",
            "Vous recherchez un partenaire immobilier, un accompagnement juridique ou un fournisseur de solutions pour le secteur minier ? Notre équipe est à votre écoute.": "Are you looking for a real estate partner, legal support or a supplier of solutions for the mining sector? Our team is ready to assist you.",
            "Téléphone 1 :": "Phone 1:",
            "Téléphone 2 :": "Phone 2:",
            "Email :": "Email:",
            "Site web :": "Website:",
            "Sièges opérationnels :": "Operational offices:",
            "Kolwezi & Lubumbashi, RDC.": "Kolwezi & Lubumbashi, DRC.",
            "Envoyer une demande": "Send an enquiry",
            "Choisir un domaine": "Choose a service",
            "Immobilier et Construction": "Real Estate and Construction",
            "Études et Conseil juridique": "Legal Studies and Consulting",
            "Fournitures et Services miniers": "Mining Supplies and Services",
            "Autre demande": "Other enquiry",
            "Envoyer la demande": "Send enquiry",
            "Votre demande sera transmise à notre équipe via WhatsApp.": "Your enquiry will be sent to our team via WhatsApp.",
            "© 2026 GAO HOUSING SARL. Tous droits réservés.": "© 2026 GAO HOUSING SARL. All rights reserved.",
            "© 2026 GAO HOUSING SARL.": "© 2026 GAO HOUSING SARL. All rights reserved.",
            "Tous droits réservés.": "All rights reserved."
        },

        zh: {
            "Accueil": "首页",
            "À propos": "关于我们",
            "Nos services": "我们的服务",
            "Nos projets": "我们的项目",
            "Notre présence": "我们的业务",
            "Galerie": "图片展示",
            "Contact": "联系我们",
            "GAO HOUSING SARL · RÉPUBLIQUE DÉMOCRATIQUE DU CONGO": "GAO HOUSING SARL · 刚果民主共和国",
            "Construire des opportunités.": "创造机遇。",
            "Créer de la valeur durable.": "创造持久价值。",
            "Le meilleur pour l'immobilier, le conseil juridique et les services miniers.": "房地产、法律咨询和矿业服务的优质选择。",
            "Découvrir nos services": "了解我们的服务",
            "Nous contacter": "联系我们",
            "QUI SOMMES-NOUS ?": "我们是谁？",
            "Société à responsabilité limitée": "有限责任公司",
            "Nos engagements": "我们的承诺",
            "Professionnalisme": "专业精神",
            "Une approche structurée, rigoureuse et orientée vers les résultats.": "采用系统、严谨并以成果为导向的方法。",
            "Conformité et transparence": "合规与透明",
            "Des prestations qui tiennent compte des exigences légales et réglementaires applicables en RDC.": "我们的服务遵循刚果民主共和国适用的法律和监管要求。",
            "Vision multisectorielle": "多领域发展愿景",
            "Des solutions complémentaires dans l'immobilier, le juridique et le secteur minier.": "提供房地产、法律和矿业领域的综合解决方案。",
            "L'EXCELLENCE AU SERVICE DE VOS PROJETS": "卓越服务，助力您的项目",
            "Excellence. Vision. Développement.": "卓越 · 愿景 · 发展",
            "NOS DOMAINES D'EXPERTISE": "我们的专业领域",
            "Des solutions pour vos projets": "为您的项目提供解决方案",
            "GAO HOUSING développe des prestations complémentaires dans trois secteurs d'activité stratégiques.": "GAO HOUSING 在三个战略行业提供互补服务。",
            "Immobilier & Construction": "房地产与建筑",
            "Intermédiation immobilière, promotion, gestion de biens, rénovation et construction de bâtiments commerciaux et résidentiels.": "房地产中介、推广、物业管理、翻新以及商业和住宅建筑施工。",
            "Demander un accompagnement →": "申请专业协助 →",
            "Études & Conseil juridique": "法律研究与咨询",
            "Études de faisabilité, audit contractuel, accompagnement réglementaire, droit OHADA et conseil en investissements.": "可行性研究、合同审计、法规支持、OHADA 法律及投资咨询。",
            "Fournitures & Services miniers": "矿业供应与服务",
            "Fourniture spécialisée de biens, équipements et solutions destinés aux entreprises du secteur minier.": "为矿业企业提供专业物资、设备和解决方案。",
            "IMMOBILIER & DÉVELOPPEMENT": "房地产与发展",
            "Nos projets immobiliers": "我们的房地产项目",
            "Découvrez les réalisations, opportunités et projets immobiliers présentés dans notre portefeuille.": "了解我们展示的项目、机遇和房地产项目。",
            "PROJET IMMOBILIER": "房地产项目",
            "Une vision moderne de l'habitat à Lubumbashi": "卢本巴希现代居住理念",
            "PRÉSENTATION": "项目介绍",
            "Projet immobilier": "房地产项目",
            "Chanson Apartments – Lubumbashi": "Chanson Apartments – 卢本巴希",
            "Découvrez ce projet résidentiel à travers ses visuels, ses espaces, ses plans architecturaux et ses caractéristiques.": "通过图片、空间布局、建筑平面图和项目特点了解这个住宅项目。",
            "DÉVELOPPEMENT": "发展",
            "Vision immobilière": "房地产愿景",
            "GAO HOUSING s'intéresse aux opportunités immobilières et aux projets de construction qui contribuent au développement urbain et économique de la République démocratique du Congo.": "GAO HOUSING 关注有助于刚果民主共和国城市和经济发展的房地产机遇及建筑项目。",
            "ACCOMPAGNEMENT": "项目支持",
            "Votre projet, notre priorité": "您的项目，我们的首要任务",
            "Nous privilégions une approche fondée sur l'analyse des besoins, la recherche d'opportunités et l'accompagnement professionnel des projets.": "我们注重需求分析、机遇寻找和专业项目支持。",
            "GAO HOUSING — Des projets, des perspectives, de la valeur.": "GAO HOUSING — 项目、前景与价值。",
            "NOS BASES OPÉRATIONNELLES": "我们的运营基地",
            "Présents en RDC": "立足刚果民主共和国",
            "Nos activités s'organisent notamment autour de Kolwezi et Lubumbashi.": "我们的业务主要围绕科卢韦齐和卢本巴希开展。",
            "NOS IMPLANTATIONS": "我们的办事地点",
            "Kolwezi & Lubumbashi": "科卢韦齐与卢本巴希",
            "Lualaba et Haut-Katanga, République démocratique du Congo.": "刚果民主共和国卢阿拉巴省和上加丹加省。",
            "UNE PRÉSENCE AU CŒUR DES OPPORTUNITÉS": "扎根机遇中心",
            "GALERIE VISUELLE": "图片展示",
            "Nos références en images": "图片展示",
            "Une sélection de visuels illustrant les domaines d'intervention et les opportunités de développement.": "通过精选图片展示我们的业务领域和发展机遇。",
            "Architecture & immobilier": "建筑与房地产",
            "Construction & infrastructures": "建筑与基础设施",
            "Projets résidentiels": "住宅项目",
            "Conception & aménagement": "设计与规划",
            "Solutions professionnelles": "专业解决方案",
            "Développement & réalisations": "发展与成果",
            "Perspectives & opportunités": "前景与机遇",
            "ESPACE ARCHITECTURE": "建筑专区",
            "Plans & espaces architecturaux": "建筑平面图与空间",
            "Découvrez les différentes configurations architecturales présentées dans notre galerie.": "了解我们图片展示中的不同建筑布局。",
            "Appartement 3 chambres": "三卧室公寓",
            "Appartement 2 chambres": "两卧室公寓",
            "Duplex prestige 5 chambres": "豪华五卧室复式住宅",
            "Les visuels et caractéristiques de cette section sont à confirmer selon le projet immobilier concerné.": "本部分的图片和特点需根据相关房地产项目确认。",
            "NOTRE COUVERTURE": "我们的业务覆盖",
            "Une présence à l'échelle nationale": "业务遍及全国",
            "GAO HOUSING vise à accompagner les opportunités dans les différentes régions de la RDC.": "GAO HOUSING 致力于支持刚果民主共和国各地区的发展机遇。",
            "Grand Katanga & ceinture minière": "大加丹加与矿业带",
            "Lualaba, Haut-Katanga, Haut-Lomami et Tanganyika.": "卢阿拉巴省、上加丹加省、上洛马米省和坦噶尼喀省。",
            "Kinshasa": "金沙萨",
            "Capitale et centre institutionnel, économique et administratif.": "首都及机构、经济和行政中心。",
            "Espace Kasaï": "开赛地区",
            "Kasaï-Central, Kasaï-Oriental, Kasaï, Lomami et Sankuru.": "中开赛省、东开赛省、开赛省、洛马米省和桑库鲁省。",
            "Est & Grand Kivu": "东部与大基伍地区",
            "Nord-Kivu, Sud-Kivu, Maniema et Ituri.": "北基伍省、南基伍省、马涅马省和伊图里省。",
            "Espace Équateur": "赤道地区",
            "Équateur, Tshuapa, Mongala, Nord-Ubangi et Sud-Ubangi.": "赤道省、楚阿帕省、蒙加拉省、北乌班吉省和南乌班吉省。",
            "Grand Orient": "大东方地区",
            "Tshopo, Bas-Uele et Haut-Uele.": "乔波省、下韦莱省和上韦莱省。",
            "Grand Ouest": "大西部地区",
            "Kongo-Central, Kwilu, Kwango et Mai-Ndombe.": "中刚果省、奎卢省、宽果省和马伊恩东贝省。",
            "DIMENSION INTERNATIONALE": "国际视野",
            "Au-delà des frontières": "跨越国界",
            "Des perspectives régionales et internationales": "区域与国际发展前景",
            "GAO HOUSING s'intéresse aux opportunités de coopération et de développement à l'échelle régionale et internationale.": "GAO HOUSING 关注区域和国际层面的合作与发展机遇。",
            "Corridor de Lobito & SADC": "洛比托走廊与南部非洲发展共同体",
            "Opportunités économiques, logistiques et commerciales en Afrique australe.": "南部非洲的经济、物流和商业机遇。",
            "Afrique centrale et occidentale": "中非与西非",
            "Perspectives de coopération avec les marchés de la région.": "与本地区市场开展合作的前景。",
            "Partenariats internationaux": "国际合作伙伴关系",
            "Recherche de collaborations en Afrique, en Europe et à l'échelle mondiale.": "寻求非洲、欧洲及全球范围内的合作。",
            "Une vision ouverte sur le monde.": "放眼世界。",
            "CONTACTEZ-NOUS": "联系我们",
            "Parlons de votre prochain projet": "让我们谈谈您的下一个项目",
            "Vous recherchez un partenaire immobilier, un accompagnement juridique ou un fournisseur de solutions pour le secteur minier ? Notre équipe est à votre écoute.": "您是否正在寻找房地产合作伙伴、法律支持或矿业解决方案供应商？我们的团队随时为您服务。",
            "Téléphone 1 :": "电话 1：",
            "Téléphone 2 :": "电话 2：",
            "Email :": "电子邮箱：",
            "Site web :": "网站：",
            "Sièges opérationnels :": "运营办公室：",
            "Kolwezi & Lubumbashi, RDC.": "刚果民主共和国科卢韦齐与卢本巴希。",
            "Envoyer une demande": "发送咨询",
            "Choisir un domaine": "选择服务领域",
            "Immobilier et Construction": "房地产与建筑",
            "Études et Conseil juridique": "法律研究与咨询",
            "Fournitures et Services miniers": "矿业供应与服务",
            "Autre demande": "其他咨询",
            "Envoyer la demande": "发送咨询",
            "Votre demande sera transmise à notre équipe via WhatsApp.": "您的咨询将通过 WhatsApp 发送给我们的团队。",
            "© 2026 GAO HOUSING SARL. Tous droits réservés.": "© 2026 GAO HOUSING SARL。版权所有。",
            "© 2026 GAO HOUSING SARL.": "© 2026 GAO HOUSING SARL。版权所有。",
            "Tous droits réservés.": "版权所有。"
        }
    };

    // Mémoriser le texte français original de chaque élément
    const textNodes = [];

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function (node) {
                if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;

                const parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;

                if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
                    return NodeFilter.FILTER_REJECT;
                }

                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );

    while (walker.nextNode()) {
        const node = walker.currentNode;

        textNodes.push({
            node: node,
            original: node.nodeValue
        });
    }

    // Mémoriser les attributs qui doivent également être traduits
    const placeholders = [];

    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(element => {
        placeholders.push({
            element: element,
            original: element.getAttribute("placeholder")
        });
    });

    const pageTitle = document.title;
    const pageDescription = document.querySelector('meta[name="description"]');

    const originalDescription = pageDescription
        ? pageDescription.getAttribute("content")
        : "";

    const languageLabels = {
        fr: "🇫🇷 FR",
        en: "🇬🇧 EN",
        zh: "🇨🇳 中文"
    };

    function normalize(text) {
        return text.replace(/\s+/g, " ").trim();
    }

    function changeLanguage(lang) {

        // Français : restaurer tous les textes d'origine
        if (lang === "fr") {

            textNodes.forEach(item => {
                item.node.nodeValue = item.original;
            });

            placeholders.forEach(item => {
                item.element.setAttribute("placeholder", item.original);
            });

            document.title = pageTitle;

            if (pageDescription) {
                pageDescription.setAttribute("content", originalDescription);
            }

        } else {

            const dictionary = translations[lang];

            // Traduire tous les textes visibles
            textNodes.forEach(item => {

                const originalText = normalize(item.original);

                if (dictionary[originalText]) {

                    const leading = item.original.match(/^\s*/)[0];
                    const trailing = item.original.match(/\s*$/)[0];

                    item.node.nodeValue =
                        leading + dictionary[originalText] + trailing;
                }
            });

            // Traduire les champs du formulaire
            placeholders.forEach(item => {

                const originalText = normalize(item.original);

                if (dictionary[originalText]) {
                    item.element.setAttribute(
                        "placeholder",
                        dictionary[originalText]
                    );
                }
            });

            // Traduire le titre de l'onglet
            if (lang === "en") {
                document.title = "GAO HOUSING SARL | Real Estate, Legal Consulting and Mining Services";
            } else {
                document.title = "GAO HOUSING SARL | 房地产、法律咨询与矿业服务";
            }

            // Traduire la description SEO
            if (pageDescription) {
                pageDescription.setAttribute(
                    "content",
                    lang === "en"
                        ? "GAO HOUSING SARL: real estate, construction, legal consulting and mining services in the Democratic Republic of the Congo."
                        : "GAO HOUSING SARL：在刚果民主共和国提供房地产、建筑、法律咨询和矿业服务。"
                );
            }
        }

        currentLanguage.textContent = languageLabels[lang];
        document.documentElement.lang = lang;

        localStorage.setItem("gao-language", lang);

        dropdown.classList.remove("show");
    }

    // Ouvrir et fermer le sélecteur
    button.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdown.classList.toggle("show");
    });

    // Sélectionner une langue
    dropdown.querySelectorAll("[data-lang]").forEach(item => {

        item.addEventListener("click", function () {
            changeLanguage(this.getAttribute("data-lang"));
        });

    });

    // Fermer le menu en cliquant ailleurs
    document.addEventListener("click", function (event) {

        if (!dropdown.contains(event.target) && !button.contains(event.target)) {
            dropdown.classList.remove("show");
        }

    });

    // Restaurer la langue choisie précédemment
    const savedLanguage = localStorage.getItem("gao-language") || "fr";

    changeLanguage(savedLanguage);

});