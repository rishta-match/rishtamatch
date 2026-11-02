/* RishtaMatch sample data (demo only).
   100 Indian cities x 10 profiles (7 female + 3 male) = 1000 fictional profiles.
   Everything here is generated and fictional. Photos are illustrated avatars, not real people. */
(function () {
  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const R = rng(20261102);
  const pick = (a) => a[Math.floor(R() * a.length)];
  const ri = (a, b) => a + Math.floor(R() * (b - a + 1));

  /* city | state | name-region (n north, pj punjab, gj gujarat, mh maharashtra/goa, e east, ne northeast, s south, jk kashmir) */
  const CITY_DATA = [
    ["Rajasthan", "n", "Jaipur,Jodhpur,Udaipur,Kota,Ajmer,Bikaner,Chittorgarh,Bhilwara"],
    ["Delhi", "n", "Delhi"],
    ["Uttar Pradesh", "n", "Lucknow,Kanpur,Varanasi,Agra,Prayagraj,Meerut,Noida,Ghaziabad,Gorakhpur"],
    ["Uttarakhand", "n", "Dehradun,Haridwar"],
    ["Haryana", "n", "Gurugram,Faridabad,Panipat"],
    ["Punjab", "pj", "Ludhiana,Amritsar,Jalandhar,Patiala"],
    ["Chandigarh", "pj", "Chandigarh"],
    ["Himachal Pradesh", "n", "Shimla,Dharamshala"],
    ["Jammu & Kashmir", "jk", "Srinagar,Jammu"],
    ["Gujarat", "gj", "Ahmedabad,Surat,Vadodara,Rajkot,Gandhinagar,Bhavnagar"],
    ["Maharashtra", "mh", "Mumbai,Pune,Nagpur,Nashik,Aurangabad,Thane,Kolhapur"],
    ["Madhya Pradesh", "n", "Indore,Bhopal,Gwalior,Jabalpur,Ujjain"],
    ["Chhattisgarh", "n", "Raipur"],
    ["Bihar", "n", "Patna,Gaya,Bhagalpur,Muzaffarpur"],
    ["Jharkhand", "n", "Ranchi,Jamshedpur,Dhanbad"],
    ["West Bengal", "e", "Kolkata,Howrah,Siliguri,Durgapur"],
    ["Odisha", "e", "Bhubaneswar,Cuttack,Rourkela"],
    ["Assam", "e", "Guwahati,Dibrugarh,Silchar"],
    ["Meghalaya", "ne", "Shillong"],
    ["Manipur", "ne", "Imphal"],
    ["Mizoram", "ne", "Aizawl"],
    ["Sikkim", "ne", "Gangtok"],
    ["Tripura", "ne", "Agartala"],
    ["Arunachal Pradesh", "ne", "Itanagar"],
    ["Nagaland", "ne", "Kohima"],
    ["Goa", "mh", "Panaji,Margao"],
    ["Karnataka", "s", "Bengaluru,Mysuru,Hubballi,Mangaluru,Belagavi"],
    ["Kerala", "s", "Thiruvananthapuram,Kochi,Kozhikode,Thrissur,Kollam"],
    ["Tamil Nadu", "s", "Chennai,Coimbatore,Madurai,Tiruchirappalli,Salem"],
    ["Telangana", "s", "Hyderabad,Warangal,Karimnagar"],
    ["Andhra Pradesh", "s", "Visakhapatnam,Vijayawada,Guntur,Tirupati"],
    ["Puducherry", "s", "Puducherry"]
  ];

  /* surname entries: [surname, community, religion, onlyGender?] */
  const NAMES = {
    n: {
      F: "Priya,Anjali,Neha,Pooja,Kavita,Sneha,Ritu,Divya,Nisha,Shweta,Komal,Swati,Preeti,Megha,Sakshi,Aarti,Ritika,Isha,Tanvi,Pallavi,Muskan,Nidhi".split(","),
      M: "Rohit,Amit,Vikram,Rahul,Sandeep,Ankit,Manish,Deepak,Gaurav,Nikhil,Sachin,Varun,Harsh,Kunal,Mohit,Ashish,Pankaj,Karan,Yash,Abhishek,Lokesh,Mayank".split(","),
      S: [["Sharma", "Brahmin", "Hindu"], ["Mishra", "Brahmin", "Hindu"], ["Tiwari", "Brahmin", "Hindu"], ["Pandey", "Brahmin", "Hindu"],
        ["Gupta", "Agarwal", "Hindu"], ["Agarwal", "Agarwal", "Hindu"], ["Singh", "Rajput", "Hindu"], ["Rathore", "Rajput", "Hindu"],
        ["Chauhan", "Rajput", "Hindu"], ["Verma", "Kayastha", "Hindu"], ["Saxena", "Kayastha", "Hindu"], ["Yadav", "Yadav", "Hindu"],
        ["Choudhary", "Jat", "Hindu"], ["Meena", "Meena", "Hindu"], ["Jain", "Jain", "Jain"], ["Kumar", "OBC", "Hindu"], ["Prajapat", "Kumhar", "Hindu"]]
    },
    pj: {
      F: "Simran,Harpreet,Gurleen,Manpreet,Jasleen,Navneet,Kiran,Amandeep,Prabhjot,Ravneet,Sukhmani,Tanvir,Mehak,Japneet,Neha,Ritika".split(","),
      M: "Gurpreet,Harjot,Jaspreet,Arshdeep,Manpreet,Navdeep,Karanveer,Amritpal,Sukhdeep,Rajveer,Harman,Jashan,Rohit,Aman".split(","),
      S: [["Singh", "Jat Sikh", "Sikh", "M"], ["Kaur", "Jat Sikh", "Sikh", "F"], ["Gill", "Jat Sikh", "Sikh"], ["Sidhu", "Jat Sikh", "Sikh"],
        ["Singh", "Jat Sikh", "Sikh", "M"], ["Kaur", "Jat Sikh", "Sikh", "F"], ["Arora", "Arora", "Hindu"], ["Khanna", "Khatri", "Hindu"],
        ["Kapoor", "Khatri", "Hindu"], ["Malhotra", "Khatri", "Hindu"], ["Sharma", "Brahmin", "Hindu"]]
    },
    jk: {
      F: "Anjali,Priya,Neha,Aarti,Kavita,Sakshi,Ritika,Pooja,Shruti,Divya".split(","),
      M: "Rohit,Amit,Vikram,Rahul,Ankit,Varun,Karan,Aman,Nikhil,Sahil".split(","),
      S: [["Kaul", "Kashmiri Pandit", "Hindu"], ["Bhat", "Kashmiri Pandit", "Hindu"], ["Dogra", "Rajput", "Hindu"], ["Sharma", "Brahmin", "Hindu"], ["Gupta", "Khatri", "Hindu"]]
    },
    gj: {
      F: "Hetal,Riddhi,Khushi,Jinal,Foram,Drashti,Nidhi,Bhavna,Krupa,Dhara,Mansi,Hiral,Urvi,Zalak,Kinjal,Dhruvi".split(","),
      M: "Jay,Dhruv,Harsh,Parth,Chirag,Nirav,Kunal,Jignesh,Hardik,Mehul,Ketan,Bhavesh,Darshan,Smit".split(","),
      S: [["Patel", "Patidar", "Hindu"], ["Patel", "Patidar", "Hindu"], ["Shah", "Jain", "Jain"], ["Mehta", "Vaishnav", "Hindu"], ["Desai", "Brahmin", "Hindu"],
        ["Joshi", "Brahmin", "Hindu"], ["Parikh", "Jain", "Jain"], ["Trivedi", "Brahmin", "Hindu"], ["Modi", "Vania", "Hindu"], ["Solanki", "Rajput", "Hindu"]]
    },
    mh: {
      F: "Aditi,Sayali,Pranjali,Snehal,Rutuja,Madhuri,Ketaki,Shruti,Gauri,Mrunal,Apurva,Ruchita,Neha,Prerna,Anuja".split(","),
      M: "Aniket,Omkar,Sagar,Rohan,Tushar,Pratik,Swapnil,Akshay,Nikhil,Siddharth,Mayur,Vaibhav,Saurabh,Chinmay".split(","),
      S: [["Patil", "Maratha", "Hindu"], ["Deshmukh", "Maratha", "Hindu"], ["Kulkarni", "Brahmin", "Hindu"], ["Joshi", "Brahmin", "Hindu"],
        ["Jadhav", "Maratha", "Hindu"], ["Shinde", "Maratha", "Hindu"], ["Pawar", "Maratha", "Hindu"], ["Gokhale", "Brahmin", "Hindu"],
        ["Shah", "Jain", "Jain"], ["D'Souza", "Catholic", "Christian"], ["Fernandes", "Catholic", "Christian"]]
    },
    e: {
      F: "Moumita,Sreya,Ananya,Tanushree,Riya,Debjani,Sohini,Pritha,Sneha,Rupsha,Puja,Barsha,Lopamudra,Jhuma,Mitali,Dipika".split(","),
      M: "Arnab,Sourav,Abhijit,Debashis,Subham,Anirban,Rajarshi,Soumya,Tamal,Biswajit,Pranab,Ritwik,Rahul,Sayan".split(","),
      S: [["Banerjee", "Brahmin", "Hindu"], ["Chatterjee", "Brahmin", "Hindu"], ["Mukherjee", "Brahmin", "Hindu"], ["Ghosh", "Kayastha", "Hindu"],
        ["Dutta", "Kayastha", "Hindu"], ["Bose", "Kayastha", "Hindu"], ["Sen", "Baidya", "Hindu"], ["Das", "Kayastha", "Hindu"],
        ["Mohanty", "Karan", "Hindu"], ["Patnaik", "Karan", "Hindu"], ["Sahoo", "Khandayat", "Hindu"], ["Bora", "Ahom", "Hindu"], ["Gogoi", "Ahom", "Hindu"]]
    },
    ne: {
      F: "Lalrin,Mary,Naomi,Esther,Ruth,Rebecca,Grace,Sarah,Rina,Kamala,Tashi,Dolma".split(","),
      M: "Daniel,Joshua,Samuel,David,Isaac,Jonathan,Elijah,Aaron,Bijoy,Tenzin,Rohit".split(","),
      S: [["Lyngdoh", "Khasi", "Christian"], ["Marak", "Garo", "Christian"], ["Sangma", "Garo", "Christian"], ["Zote", "Mizo", "Christian"],
        ["Thapa", "Gorkha", "Hindu"], ["Gogoi", "Ahom", "Hindu"], ["Bora", "Ahom", "Hindu"], ["Debbarma", "Tripuri", "Hindu"]]
    },
    s: {
      F: "Lakshmi,Divya,Keerthi,Anjali,Meera,Swathi,Deepa,Aishwarya,Harini,Pooja,Sowmya,Nithya,Revathi,Anusha,Bhavana,Sruthi,Athira,Gayathri".split(","),
      M: "Arjun,Karthik,Vishnu,Suresh,Naveen,Praveen,Ashwin,Rakesh,Harish,Sanjay,Vignesh,Aravind,Manoj,Dinesh,Sreenath".split(","),
      S: [["Iyer", "Brahmin", "Hindu"], ["Nair", "Nair", "Hindu"], ["Reddy", "Reddy", "Hindu"], ["Naidu", "Kamma", "Hindu"], ["Rao", "Brahmin", "Hindu"],
        ["Menon", "Nair", "Hindu"], ["Pillai", "Pillai", "Hindu"], ["Gowda", "Vokkaliga", "Hindu"], ["Shetty", "Bunt", "Hindu"], ["Hegde", "Brahmin", "Hindu"],
        ["Chettiar", "Chettiar", "Hindu"], ["Thomas", "Syrian Christian", "Christian"], ["Mathew", "Syrian Christian", "Christian"], ["Joseph", "Latin Catholic", "Christian"]]
    }
  };
  const MUS = {
    F: "Ayesha,Fatima,Zainab,Sana,Nazia,Rukhsar,Mehreen,Aaliya,Sumaiya,Iqra,Hina,Farah".split(","),
    M: "Imran,Faisal,Arif,Zaid,Adnan,Rizwan,Salman,Irfan,Aamir,Danish,Tariq,Shahid".split(","),
    S: [["Khan", "Sunni", "Muslim"], ["Ansari", "Sunni", "Muslim"], ["Qureshi", "Sunni", "Muslim"], ["Sheikh", "Sunni", "Muslim"], ["Siddiqui", "Sunni", "Muslim"], ["Mirza", "Sunni", "Muslim"]]
  };
  const MUS_P = { "Jammu & Kashmir": 0.6, "Uttar Pradesh": 0.12, "Bihar": 0.1, "West Bengal": 0.12, "Assam": 0.1, "Kerala": 0.15, "Telangana": 0.12, "Delhi": 0.08, "Jharkhand": 0.06, "Punjab": 0.02, "Chandigarh": 0.02 };
  const VEG_P = { n: 0.65, pj: 0.5, jk: 0.5, gj: 0.85, mh: 0.5, e: 0.15, ne: 0.1, s: 0.35 };

  const JOBS = [
    ["Software Engineer", "B.Tech"], ["Doctor", "MBBS"], ["Teacher", "B.Ed"], ["Chartered Accountant", "CA"], ["Bank Officer", "M.Com"],
    ["HR Manager", "MBA"], ["Business Owner", "B.Com"], ["Government Employee", "Graduate"], ["Lawyer", "LLB"], ["Architect", "B.Arch"],
    ["Nurse", "B.Sc Nursing"], ["Designer", "B.Des"], ["Data Analyst", "M.Sc"], ["Civil Engineer", "B.E."], ["Marketing Manager", "MBA"],
    ["Pharmacist", "B.Pharm"], ["Branch Manager", "MBA"], ["Professor", "PhD"], ["Entrepreneur", "MBA"], ["Finance Executive", "B.Com"],
    ["Mechanical Engineer", "B.Tech"], ["Content Writer", "MA"], ["Banker", "MBA"], ["Dentist", "BDS"]
  ];
  const BIOS = [
    "Family-oriented and down to earth.", "Love travelling and trying new food.", "Simple living, high thinking.", "Career-minded but value family time.",
    "Enjoy music, movies and long drives.", "Looking for a caring and understanding partner.", "Believe in respect and honesty above all.",
    "Fitness lover, early riser and a bit of a foodie.", "Love reading and spending time with family.", "Positive, independent and open-minded.",
    "Weekends mean cricket, chai and friends.", "Passionate about my work, happy at home.", "Traditional values with a modern outlook.", "Easy-going person who loves a good laugh."
  ];

  const CITIES = [];
  const out = [];
  let id = 0;
  CITY_DATA.forEach(([state, reg, list]) => {
    list.split(",").forEach((city) => {
      CITIES.push({ city, state });
      const muP = MUS_P[state] || 0.04;
      for (let k = 0; k < 10; k++) {
        const g = k < 7 ? "F" : "M";
        const isMus = R() < muP;
        const pool = isMus ? MUS : NAMES[reg];
        const sn = pick(pool.S.filter((s) => !s[3] || s[3] === g));
        const [job, edu] = pick(JOBS);
        const rel = sn[2];
        const veg = rel === "Muslim" ? false : rel === "Jain" ? true : R() < VEG_P[reg];
        const p = {
          id: ++id, g, city, state,
          name: pick(pool[g]) + " " + sn[0],
          age: g === "F" ? ri(22, 30) : ri(24, 34),
          edu, job, comm: sn[1], rel,
          height: g === "F" ? "5'" + ri(0, 7) + '"' : (R() < 0.12 ? "6'0\"" : "5'" + ri(5, 11) + '"'),
          diet: veg ? "veg" : "nonveg",
          bio: pick(BIOS),
          o: R()
        };
        if (R() < 0.35) p.a = [ri(0, 4), ri(0, 3), ri(0, 6), ri(0, 4), ri(0, 2), ri(0, 3)];
        out.push(p);
      }
    });
  });

  const SKIN = ["#f1c9a5", "#e0ac82", "#c68a5e", "#a86b42", "#8a5232"];
  const HAIR = ["#1b1b1b", "#2c1b12", "#3b2a20", "#4a3224"];
  const SHIRT = ["#8b1e3f", "#2e6f95", "#6a994e", "#bc6c25", "#6d597a", "#d4a017", "#c0392b"];
  const BG = ["#fdeccc", "#e8f1f8", "#e6f4ea", "#f5e1ea", "#ece6f5"];

  function svgAvatar(p) {
    const [sk, hr, sh, bg, st, ex] = p.a;
    const skin = SKIN[sk], hair = HAIR[hr], shirt = SHIRT[sh], F = p.g === "F";
    let s = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='" + BG[bg] + "'/>";
    if (F) s += "<path d='M24 48Q24 14 50 14Q76 14 76 48L80 90L20 90Z' fill='" + hair + "'/>";
    s += "<path d='M12 100Q14 74 50 70Q86 74 88 100Z' fill='" + shirt + "'/>";
    s += "<rect x='43' y='58' width='14' height='16' fill='" + skin + "'/>";
    s += "<ellipse cx='50' cy='44' rx='19' ry='22' fill='" + skin + "'/>";
    if (F) {
      s += "<path d='M30 42Q30 20 50 20Q70 20 70 42Q60 29 50 29Q40 29 30 42Z' fill='" + hair + "'/>";
      if (ex === 0 || ex === 1) s += "<circle cx='50' cy='34' r='1.7' fill='#c0392b'/>";
    } else {
      s += "<path d='M30 44Q28 18 50 18Q72 18 70 44Q68 30 50 28Q32 30 30 44Z' fill='" + hair + "'/>";
      if (ex === 0) s += "<path d='M33 50Q50 78 67 50Q64 66 50 68Q36 66 33 50Z' fill='" + hair + "'/>";
    }
    s += "<circle cx='43' cy='44' r='1.9' fill='#2b2024'/><circle cx='57' cy='44' r='1.9' fill='#2b2024'/>";
    if (ex === 2) s += "<circle cx='43' cy='44' r='5.5' fill='none' stroke='#2b2024' stroke-width='1.4'/><circle cx='57' cy='44' r='5.5' fill='none' stroke='#2b2024' stroke-width='1.4'/><path d='M48.5 44h3' stroke='#2b2024' stroke-width='1.4'/>";
    s += "<path d='M43 54Q50 60 57 54' stroke='#7a3b3b' fill='none' stroke-width='2' stroke-linecap='round'/></svg>";
    return "data:image/svg+xml;utf8," + encodeURIComponent(s);
  }

  window.PROFILES = out;
  window.CITIES = CITIES.sort((a, b) => a.city.localeCompare(b.city));
  window.STATES = [...new Set(CITIES.map((c) => c.state))].sort();
  window.svgAvatar = svgAvatar;
})();
