import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import type { Metadata } from "next";

// ─── Article Content ────────────────────────────────────────────────────────

const articles: Record<string, Record<string, {
  title: string;
  metaDesc: string;
  tag: string;
  readTime: string;
  icon: string;
  intro: string;
  sections: { heading: string; body: string }[];
  conclusion: string;
}>> = {
  el: {
    "kataskevi-istoselidon-timi": {
      title: "Πόσο κοστίζει μια επαγγελματική ιστοσελίδα;",
      metaDesc: "Ανακαλύψτε τους παράγοντες που καθορίζουν την τιμή μιας επαγγελματικής ιστοσελίδας στην Ελλάδα και πώς να αξιολογήσετε τι αξίζει για την επιχείρησή σας.",
      tag: "Κατασκευή Ιστοσελίδων",
      readTime: "5 λεπτά ανάγνωση",
      icon: "💰",
      intro: "«Πόσο κοστίζει;» Είναι η πρώτη ερώτηση που μας κάνουν σχεδόν όλοι. Και η ειλικρινής απάντηση είναι: εξαρτάται. Όχι επειδή θέλουμε να αποφύγουμε την ερώτηση — αλλά επειδή η τιμή μιας ιστοσελίδας διαμορφώνεται από συγκεκριμένους παράγοντες που αξίζει να καταλάβετε πριν ξεκινήσετε.",
      sections: [
        {
          heading: "1. Τι τύπου ιστοσελίδα χρειάζεστε;",
          body: "Μια απλή «επαγγελματική κάρτα» με 4–5 σελίδες (αρχική, υπηρεσίες, σχετικά, επικοινωνία) κοστίζει πολύ λιγότερο από ένα e-shop με 500 προϊόντα ή μια πλατφόρμα κρατήσεων για ξενοδοχείο. Οι τύποι ιστοσελίδων που φτιάχνουμε: βασική επαγγελματική παρουσία, ιστοσελίδα με blog, e-commerce, πολυγλωσσική ιστοσελίδα, ιστοσελίδα με booking engine. Κάθε τύπος έχει διαφορετικές απαιτήσεις σε σχεδιασμό, ανάπτυξη και χρόνο."
        },
        {
          heading: "2. Custom σχεδιασμός vs Template",
          body: "Μια ιστοσελίδα που κτίζεται από μηδέν — custom σχεδιασμός, custom κώδικας — κοστίζει περισσότερο από μια λύση βασισμένη σε έτοιμο template. Η διαφορά; Το custom αποτέλεσμα είναι μοναδικό, προσαρμοσμένο στο brand σας, και συνήθως γρηγορότερο και πιο SEO-friendly. Τα templates είναι φθηνότερα αλλά έχουν περιορισμούς — συχνά αργούν και δεν ξεχωρίζουν από τον ανταγωνισμό."
        },
        {
          heading: "3. Λειτουργίες & ενσωματώσεις",
          body: "Booking engine, σύνδεση με CRM, πολυγλωσσικό σύστημα, φόρμες, newsletter integration, maps, online πληρωμές — κάθε επιπλέον λειτουργία προσθέτει χρόνο ανάπτυξης και επομένως κόστος. Αξίζει να ξέρετε εξαρχής τι χρειάζεστε, ώστε η προσφορά να είναι ακριβής."
        },
        {
          heading: "4. SEO & περιεχόμενο",
          body: "Μια ιστοσελίδα που παραδίδεται χωρίς SEO βελτιστοποίηση είναι σαν να ανοίγετε κατάστημα σε σκοτεινό δρομάκι. Το on-page SEO (δομή URLs, meta tags, headings, schema markup, ταχύτητα φόρτωσης) είναι βασικό κομμάτι κάθε project που παραδίδουμε. Αν χρειάζεστε επιπλέον συγγραφή κειμένων SEO, αυτό προσμετράται ξεχωριστά."
        },
        {
          heading: "5. Κατά προσέγγιση εύρη τιμών",
          body: "Χωρίς να μπορούμε να δώσουμε ακριβή τιμή χωρίς ανάλυση, γενικά: μια βασική επαγγελματική ιστοσελίδα κυμαίνεται από 800–2.000€, μια ιστοσελίδα με advanced λειτουργίες (πολύγλωσση, booking) από 2.000–5.000€, και πιο σύνθετα projects (e-commerce, custom πλατφόρμες) από 5.000€ και πάνω. Η συντήρηση είναι ξεχωριστή και συνήθως μηνιαία."
        }
      ],
      conclusion: "Το πιο σημαντικό δεν είναι να βρείτε την πιο φθηνή λύση — αλλά τη λύση που θα σας φέρει τα αποτελέσματα που θέλετε. Μια ιστοσελίδα είναι επένδυση, όχι έξοδο. Επικοινωνήστε μαζί μας για μια δωρεάν ανάλυση των αναγκών σας."
    },
    "ai-assistant-epixeiriseis": {
      title: "Πώς ένας AI assistant μπορεί να αλλάξει τον τρόπο που δουλεύει η επιχείρησή σας",
      metaDesc: "Μάθετε πώς οι AI assistants βοηθούν επιχειρήσεις να αυτοματοποιήσουν την εξυπηρέτηση, να συλλέγουν leads και να λειτουργούν 24/7 χωρίς επιπλέον προσωπικό.",
      tag: "AI Assistants",
      readTime: "7 λεπτά ανάγνωση",
      icon: "🤖",
      intro: "Το 2024, ένας AI assistant δεν είναι πλέον επιλογή για μεγάλες εταιρείες. Είναι ένα εργαλείο που κάθε επιχείρηση — ξενοδοχείο, εστιατόριο, δικηγόρος, γιατρός — μπορεί να αξιοποιήσει για να εξυπηρετεί καλύτερα, γρηγορότερα και χωρίς ανθρώπινο κόστος.",
      sections: [
        {
          heading: "Τι κάνει ακριβώς ένας AI assistant;",
          body: "Ένας AI assistant είναι ένα ψηφιακό σύστημα που συνομιλεί με τους πελάτες σας αυτόματα — στην ιστοσελίδα, στο WhatsApp ή στο Messenger. Απαντά σε ερωτήσεις, συλλέγει στοιχεία, κλείνει ραντεβού ή κρατήσεις, και αν δεν μπορεί να βοηθήσει, σας ειδοποιεί να επέμβετε εσείς. Δεν αντικαθιστά τον ανθρώπινο παράγοντα — τον συμπληρώνει και τον αναβαθμίζει."
        },
        {
          heading: "Πρακτικό παράδειγμα: ξενοδοχείο",
          body: "Ένα ξενοδοχείο δέχεται δεκάδες ερωτήσεις την ημέρα: «Τι ώρα είναι το check-in;», «Έχετε διαθέσιμο δωμάτιο για τις 15 Αυγούστου;», «Υπάρχει πάρκινγκ;». Ένας AI assistant απαντά σε όλα αυτά αυτόματα, 24/7, στη γλώσσα του επισκέπτη — απελευθερώνοντας το προσωπικό για πιο σύνθετες ανάγκες."
        },
        {
          heading: "Πρακτικό παράδειγμα: επαγγελματίας υγείας",
          body: "Ένας γιατρός ή οδοντίατρος έχει συνεχή ροή ερωτήσεων για ραντεβού, ασφαλιστικά ταμεία, τιμές. Ο AI assistant απαντά άμεσα, κλείνει ραντεβούς στο πρόγραμμα και απαλλάσσει τη γραμματεία από επαναλαμβανόμενες κλήσεις — οδηγώντας σε μεγαλύτερη ικανοποίηση ασθενών και λιγότερο stress."
        },
        {
          heading: "Γιατί δεν είναι ακόμα σαν τα παλιά chatbots;",
          body: "Τα παλιά chatbots ακολουθούσαν αυστηρό decision tree: «Πατήστε 1 για υπηρεσίες». Τα σύγχρονα AI assistants καταλαβαίνουν φυσική γλώσσα, απαντούν με νόημα και μαθαίνουν με τον χρόνο. Η συνομιλία μοιάζει με ανθρώπινη — και αυτή είναι η κρίσιμη διαφορά."
        },
        {
          heading: "Πόσο κοστίζει και πότε αποσβένεται η επένδυση;",
          body: "Ένας AI assistant για μικρή-μεσαία επιχείρηση συνήθως απαιτεί μικρό setup κόστος και μια μηνιαία συνδρομή λειτουργίας. Συγκρίνετε αυτό με το κόστος ενός υπαλλήλου ή της χαμένης επιχείρησης από αναπάντητες ερωτήσεις — και η απόσβεση γίνεται γρήγορα εμφανής."
        }
      ],
      conclusion: "Αν η επιχείρησή σας δέχεται συχνές ερωτήσεις, χάνει leads εκτός ωραρίου ή θέλει να βελτιώσει την εξυπηρέτηση χωρίς επιπλέον κόστος προσωπικού, ένας AI assistant είναι η λογική επόμενη κίνηση. Ρωτήστε μας πώς μπορούμε να το υλοποιήσουμε για εσάς."
    },
    "xenodoxeio-istoselidon-ti-perilamvanei": {
      title: "Ιστοσελίδα για ξενοδοχείο: τι πρέπει να περιλαμβάνει για απευθείας κρατήσεις",
      metaDesc: "Τα 8 βασικά στοιχεία που πρέπει να έχει η ιστοσελίδα κάθε ξενοδοχείου για να αυξήσει τις απευθείας κρατήσεις και να μειώσει τις προμήθειες.",
      tag: "Ξενοδοχεία & Τουρισμός",
      readTime: "6 λεπτά ανάγνωση",
      icon: "🏨",
      intro: "Το Booking.com κρατά 15–25% από κάθε κράτηση. Για ένα ξενοδοχείο με 1.000€/μέρα εσόδων, αυτό σημαίνει 150–250€ που πηγαίνουν αλλού. Μια καλή ιστοσελίδα μπορεί να αλλάξει ριζικά αυτή τη ζυγαριά. Αλλά δεν φτάνει να «έχεις» ιστοσελίδα — πρέπει να έχεις τη σωστή.",
      sections: [
        {
          heading: "1. Inline Booking Engine",
          body: "Το πιο κρίσιμο στοιχείο. Οι επισκέπτες πρέπει να μπορούν να κλείσουν δωμάτιο χωρίς να φύγουν από την ιστοσελίδα σας. Ο booking engine πρέπει να είναι γρήγορος, mobile-friendly και να συγχρονίζεται αυτόματα με τη διαθεσιμότητά σας."
        },
        {
          heading: "2. Premium Photography & Virtual Tours",
          body: "Οι εικόνες πωλούν. Ένα επαγγελματικό φωτογραφικό υλικό και, αν είναι δυνατόν, virtual tour των δωματίων αυξάνει σημαντικά τη μετατροπή επισκεπτών σε κρατήσεις. Ο επισκέπτης αγοράζει εμπειρία — δώστε του να τη δει."
        },
        {
          heading: "3. Πολυγλωσσική Υποστήριξη",
          body: "Αν έχετε ξένους επισκέπτες — και ποιο ελληνικό ξενοδοχείο δεν έχει; — η ιστοσελίδα πρέπει να είναι τουλάχιστον στα Ελληνικά και Αγγλικά. Κάθε γλωσσική έκδοση πρέπει να είναι SEO-optimized ξεχωριστά για να φαίνεται στις αντίστοιχες αγορές."
        },
        {
          heading: "4. Social Proof & Reviews",
          body: "Ενσωματώστε κριτικές από Google, TripAdvisor και Booking απευθείας στην ιστοσελίδα. Ο επισκέπτης που διαβάζει θετικές κριτικές στο site σας είναι πολύ πιο πιθανό να κλείσει θέση — χωρίς να φύγει αλλού για να «επιβεβαιώσει»."
        },
        {
          heading: "5. Εμφανές «Best Rate Guarantee»",
          body: "Δείξτε ξεκάθαρα ότι η καλύτερη τιμή βρίσκεται στην ιστοσελίδα σας — όχι στο Booking. Αυτό μειώνει τον φόβο του επισκέπτη ότι «χάνει» κάτι κλείνοντας απευθείας."
        },
        {
          heading: "6. Γρήγορη Φόρτωση & Mobile-First",
          body: "Το 60%+ των αναζητήσεων για ξενοδοχεία γίνεται από κινητό. Αν η ιστοσελίδα αργεί ή δεν δουλεύει σωστά σε κινητό, χάνετε κρατήσεις χωρίς καν να το ξέρετε."
        },
        {
          heading: "7. SEO για τοπικές και διεθνείς αναζητήσεις",
          body: "Η ιστοσελίδα πρέπει να εμφανίζεται όταν κάποιος ψάχνει 'hotel in Santorini' ή 'ξενοδοχεία Κρήτη'. Αυτό απαιτεί στρατηγικό SEO — keyword research, structured data, Google Hotels integration."
        },
        {
          heading: "8. AI Concierge για 24/7 εξυπηρέτηση",
          body: "Ένας AI assistant στην ιστοσελίδα απαντά σε ερωτήσεις επισκεπτών αυτόματα — για τιμές, διαθεσιμότητα, facilities — ακόμα και τα μεσάνυχτα, βοηθώντας στη μετατροπή ενδιαφερόμενων σε κρατήσεις."
        }
      ],
      conclusion: "Μια σύγχρονη ιστοσελίδα για ξενοδοχείο δεν είναι έξοδο — είναι ένα κανάλι πωλήσεων που αποσβένει γρήγορα. Αν θέλετε να δείτε τι μπορούμε να κάνουμε για το κατάλυμά σας, επικοινωνήστε μαζί μας για μια δωρεάν ανάλυση."
    },
    "local-seo-topikes-epixeiriseis": {
      title: "Local SEO: Πώς να κυριαρχείτε στις τοπικές αναζητήσεις Google",
      metaDesc: "Πρακτικός οδηγός Local SEO για τοπικές επιχειρήσεις. Μάθετε πώς να εμφανίζεστε στην κορυφή του Google Maps και να προσελκύετε περισσότερους τοπικούς πελάτες.",
      tag: "SEO & Marketing",
      readTime: "8 λεπτά ανάγνωση",
      icon: "📍",
      intro: "Κάθε μέρα, εκατομμύρια άνθρωποι ψάχνουν στη Google κάτι που χρειάζονται κοντά τους. «Εστιατόρια κοντά μου», «οδοντίατρος Θεσσαλονίκη», «μηχανικός Αθήνα». Αν η επιχείρησή σας δεν εμφανίζεται σε αυτές τις αναζητήσεις, χάνετε πελάτες που ψάχνουν ακριβώς αυτό που προσφέρετε.",
      sections: [
        {
          heading: "Τι είναι το Local SEO;",
          body: "Το Local SEO είναι η βελτιστοποίηση της online παρουσίας σας ώστε να εμφανίζεστε σε τοπικές αναζητήσεις — κυρίως στο Google Maps («map pack») αλλά και στα οργανικά αποτελέσματα για αναζητήσεις με γεωγραφικό ενδιαφέρον."
        },
        {
          heading: "Βήμα 1: Google Business Profile",
          body: "Αν δεν έχετε ήδη ένα πλήρες και ενημερωμένο Google Business Profile, αυτό είναι το πρώτο πράγμα που πρέπει να κάνετε. Ορίστε τις σωστές κατηγορίες, προσθέστε φωτογραφίες, ωράρια, υπηρεσίες και ζητήστε ενεργά κριτικές από πελάτες. Το GBP είναι το πιο ισχυρό εργαλείο Local SEO."
        },
        {
          heading: "Βήμα 2: NAP Consistency",
          body: "NAP = Name, Address, Phone. Το όνομα, η διεύθυνση και το τηλέφωνό σας πρέπει να είναι ακριβώς ίδια παντού: GBP, ιστοσελίδα, Facebook, TripAdvisor, κλπ. Ασυμφωνίες μπερδεύουν τη Google και μειώνουν την κατάταξή σας."
        },
        {
          heading: "Βήμα 3: Τοπικά Keywords στην Ιστοσελίδα",
          body: "Η ιστοσελίδα σας πρέπει να περιέχει τοπικές λέξεις-κλειδιά: «υδραυλικός Πάτρα», «ψητοπωλείο Κολωνάκι», «ξενοδοχείο Χανιά». Αυτό δεν σημαίνει keyword stuffing — αλλά φυσική ενσωμάτωση σε τίτλους, περιγραφές και σελίδες."
        },
        {
          heading: "Βήμα 4: Local Reviews",
          body: "Οι κριτικές στο Google είναι ένας από τους πιο σημαντικούς παράγοντες κατάταξης. Ζητήστε ενεργά κριτικές από ικανοποιημένους πελάτες — με QR code, email ή SMS μετά την επίσκεψη. Απαντήστε σε κάθε κριτική, θετική και αρνητική."
        },
        {
          heading: "Βήμα 5: Local Citations & Directories",
          body: "Εγγραφείτε σε τοπικούς καταλόγους επιχειρήσεων (Vrisko.gr, Xo.gr, Foursquare κ.α.) με συνεπή στοιχεία. Αυτά τα «citations» ενισχύουν την αξιοπιστία σας στα μάτια της Google."
        },
        {
          heading: "Πόσο χρόνο παίρνει;",
          body: "Τα αποτελέσματα του Local SEO δεν είναι άμεσα — αλλά είναι διαρκή. Συνήθως σε 2–4 μήνες συστηματικής δουλειάς αρχίζετε να βλέπετε βελτίωση. Σε 6 μήνες, μπορεί να κυριαρχείτε στις τοπικές αναζητήσεις για τον κλάδο σας."
        }
      ],
      conclusion: "Το Local SEO είναι μια από τις πιο αποδοτικές επενδύσεις marketing για τοπικές επιχειρήσεις — επειδή στοχεύει ανθρώπους που ήδη ψάχνουν αυτό που προσφέρετε. Θέλετε να αναλύσουμε τη θέση σας; Επικοινωνήστε μαζί μας."
    },
    "mobile-first-sxediasmos": {
      title: "Mobile-First Design: Γιατί η ιστοσελίδα σας πρέπει να σχεδιαστεί για κινητά πρώτα",
      metaDesc: "Μάθετε γιατί το Mobile-First Design είναι κρίσιμο για το SEO και την εμπειρία χρήστη — και πώς επηρεάζει άμεσα τις πωλήσεις της επιχείρησής σας.",
      tag: "Web Design",
      readTime: "5 λεπτά ανάγνωση",
      icon: "📱",
      intro: "Αν σχεδιάζετε μια ιστοσελίδα το 2024 «για desktop» και μετά την «προσαρμόζετε» για κινητό, κάνετε λάθος. Η Google το ξέρει. Και οι πελάτες σας το νιώθουν.",
      sections: [
        {
          heading: "Τι σημαίνει Mobile-First Design;",
          body: "Mobile-First σημαίνει ότι ο σχεδιασμός ξεκινά από το κινητό — το μικρότερο, πιο προκλητικό περιβάλλον — και μετά επεκτείνεται στο tablet και το desktop. Αυτή η προσέγγιση διασφαλίζει ότι η εμπειρία στο κινητό είναι εξαιρετική, όχι απλώς «αποδεκτή»."
        },
        {
          heading: "Γιατί έχει σημασία για το SEO;",
          body: "Από το 2019, η Google χρησιμοποιεί Mobile-First Indexing — δηλαδή αξιολογεί την ιστοσελίδα σας με βάση την κινητή έκδοση, όχι την desktop. Αν η mobile εμπειρία σας είναι κακή, η Google το τιμωρεί με χαμηλότερη κατάταξη — ανεξάρτητα από το πόσο καλή είναι η desktop έκδοση."
        },
        {
          heading: "Τι συμβαίνει αν δεν είστε mobile-friendly;",
          body: "Χάνετε πελάτες: ο μέσος χρήστης εγκαταλείπει μια ιστοσελίδα που δεν φορτώνει σωστά σε κινητό σε λιγότερο από 3 δευτερόλεπτα. Χάνετε κατάταξη: η Google σας κατεβάζει. Χάνετε αξιοπιστία: μια ιστοσελίδα που δείχνει «σπασμένη» σε κινητό στέλνει το λάθος μήνυμα για την επιχείρησή σας."
        },
        {
          heading: "Τα βασικά στοιχεία ενός Mobile-First site",
          body: "Γρήγορη φόρτωση (κάτω από 3 δευτερόλεπτα στο κινητό), εύκολη πλοήγηση με μεγάλα κουμπιά, κείμενο ευανάγνωστο χωρίς zoom, φόρμες και κουμπιά CTA εύκολα προσβάσιμα, και εικόνες βελτιστοποιημένες για γρήγορη φόρτωση."
        },
        {
          heading: "Πώς το ελέγχω;",
          body: "Google PageSpeed Insights (pagespeed.web.dev) — εισάγετε το URL σας και βλέπετε τη βαθμολογία mobile. Κάτω από 70 σημαίνει πρόβλημα. Google Mobile-Friendly Test (search.google.com/test/mobile-friendly) — επιβεβαιώνει αν η Google θεωρεί την ιστοσελίδα σας mobile-friendly."
        }
      ],
      conclusion: "Αν δεν ξέρετε αν η ιστοσελίδα σας είναι Mobile-First, ανοίξτε τη στο κινητό σας τώρα. Αν δυσκολεύεστε να πλοηγηθείτε, οι πελάτες σας αντιμετωπίζουν το ίδιο πρόβλημα. Μιλήστε μαζί μας — κάνουμε δωρεάν αξιολόγηση της mobile εμπειρίας σας."
    },
    "digital-marketing-stratigi": {
      title: "Digital Marketing Strategy: Πού να επενδύσετε πρώτα το budget σας",
      metaDesc: "Πρακτικός οδηγός για να αποφασίσετε πού να επενδύσετε το digital marketing budget σας: SEO, Google Ads, Social Media ή Email Marketing;",
      tag: "Digital Marketing",
      readTime: "9 λεπτά ανάγνωση",
      icon: "📊",
      intro: "«Πού να ξεκινήσω;» είναι η ερώτηση που ακούμε συχνότερα από επιχειρηματίες που θέλουν να επενδύσουν στο digital marketing. Η αγορά έχει πολλές επιλογές — και αν δεν έχετε ξεκάθαρη στρατηγική, ο κίνδυνος είναι να ξοδεύετε χωρίς να βλέπετε αποτέλεσμα.",
      sections: [
        {
          heading: "Πρώτα: Ορίστε τον στόχο σας",
          body: "Πριν αποφασίσετε κανάλι, ορίστε τι θέλετε να επιτύχετε. Περισσότερους επισκέπτες στην ιστοσελίδα; Περισσότερες κλήσεις; Online πωλήσεις; Κάθε στόχος οδηγεί σε διαφορετική στρατηγική. Χωρίς στόχο, δεν μπορείτε να μετρήσετε αποτέλεσμα."
        },
        {
          heading: "Google Ads: Αποτελέσματα τώρα, κόστος ανά κλικ",
          body: "Αν χρειάζεστε αποτελέσματα άμεσα — leads, πωλήσεις, τηλεφωνήματα — τα Google Ads είναι η πιο γρήγορη λύση. Πληρώνετε ανά κλικ, εμφανίζεστε στην κορυφή αμέσως. Το μειονέκτημα; Σταματάτε να πληρώνετε, σταματάτε να εμφανίζεστε."
        },
        {
          heading: "SEO: Αργότερα αποτελέσματα, διαρκής αξία",
          body: "Το SEO δεν φέρνει αποτελέσματα μέσα σε μια εβδομάδα — αλλά χτίζει παρουσία που διαρκεί. Μόλις βρεθείτε στην πρώτη σελίδα για τα keywords σας, λαμβάνετε δωρεάν organic traffic χωρίς να πληρώνετε ανά κλικ. Η SEO είναι μακροπρόθεσμη επένδυση."
        },
        {
          heading: "Social Media: Brand visibility & engagement",
          body: "Τα social media (Facebook, Instagram, TikTok) δεν είναι συνήθως το κανάλι για άμεσες πωλήσεις — αλλά είναι ιδανικά για brand visibility, storytelling και δημιουργία κοινότητας. Αν στοχεύετε σε νόημα αγοραστή, το social organic content + Meta Ads μπορεί να λειτουργήσει πολύ καλά."
        },
        {
          heading: "Email Marketing: Ο αδικαδικημένος πρωταθλητής",
          body: "Το email marketing έχει από τα υψηλότερα ROI όλων των καναλιών — αλλά απαιτεί λίστα. Αν έχετε ήδη πελάτες, η επικοινωνία μαζί τους μέσω email είναι το φθηνότερο και πιο αποδοτικό εργαλείο retention."
        },
        {
          heading: "Το ιδανικό budget allocation",
          body: "Για μια νέα επιχείρηση χωρίς κοινό: 60% Google/Meta Ads για άμεσα αποτελέσματα, 30% SEO για μακροπρόθεσμη ανάπτυξη, 10% content/social. Για μια εδραιωμένη επιχείρηση: μεγαλύτερο ποσοστό SEO και email, λιγότερo paid."
        }
      ],
      conclusion: "Δεν υπάρχει «σωστή» στρατηγική για όλους — υπάρχει η σωστή στρατηγική για εσάς, βάσει του κλάδου, του στόχου και του budget σας. Ρωτήστε μας για μια δωρεάν ανάλυση και πρόταση στρατηγικής."
    }
  },
  en: {
    "cost-of-website": {
      title: "How much does a professional website cost?",
      metaDesc: "Discover the factors that determine the price of a professional website and how to evaluate what's worth it for your business.",
      tag: "Website Development",
      readTime: "5 min read",
      icon: "💰",
      intro: "'How much does it cost?' It's the first question almost everyone asks us. And the honest answer is: it depends. Not because we want to dodge the question — but because the price of a website is shaped by specific factors that are worth understanding before you start.",
      sections: [
        { heading: "1. What type of website do you need?", body: "A simple 'digital business card' with 4–5 pages (home, services, about, contact) costs much less than an e-shop with 500 products or a hotel booking platform. Types we build: basic business presence, websites with blog, e-commerce, multilingual sites, sites with booking engines. Each type has different design, development and time requirements." },
        { heading: "2. Custom design vs Template", body: "A website built from scratch — custom design, custom code — costs more than a template-based solution. The difference? Custom results are unique, tailored to your brand, and usually faster and more SEO-friendly. Templates are cheaper but have limitations — they're often slow and don't stand out from the competition." },
        { heading: "3. Features & integrations", body: "Booking engines, CRM connections, multilingual systems, forms, newsletter integration, maps, online payments — every additional feature adds development time and therefore cost. It's worth knowing what you need upfront, so the quote is accurate." },
        { heading: "4. SEO & content", body: "A website delivered without SEO optimization is like opening a shop in a dark alley. On-page SEO (URL structure, meta tags, headings, schema markup, loading speed) is a basic component of every project we deliver. If you also need SEO copywriting, that's quoted separately." },
        { heading: "5. Approximate price ranges", body: "Without being able to give an exact price without analysis: a basic professional website ranges from €800–2,000, a site with advanced features (multilingual, booking) from €2,000–5,000, and more complex projects (e-commerce, custom platforms) from €5,000+. Maintenance is separate and usually monthly." }
      ],
      conclusion: "The most important thing isn't finding the cheapest solution — it's finding the solution that will bring you the results you want. A website is an investment, not an expense. Contact us for a free analysis of your needs."
    },
    "ai-assistant-benefits": {
      title: "How an AI assistant can change the way your business works",
      metaDesc: "Learn how AI assistants help businesses automate service, collect leads and operate 24/7 without extra staff.",
      tag: "AI Assistants",
      readTime: "7 min read",
      icon: "🤖",
      intro: "In 2024, an AI assistant is no longer an option only for large companies. It's a tool that any business — hotel, restaurant, lawyer, doctor — can leverage to serve better, faster and without human cost.",
      sections: [
        { heading: "What exactly does an AI assistant do?", body: "An AI assistant is a digital system that automatically converses with your customers — on the website, WhatsApp or Messenger. It answers questions, collects details, schedules appointments or reservations, and if it can't help, notifies you to step in. It doesn't replace the human element — it complements and upgrades it." },
        { heading: "Practical example: hotel", body: "A hotel receives dozens of questions daily: 'What time is check-in?', 'Do you have availability for August 15?', 'Is there parking?' An AI assistant answers all of these automatically, 24/7, in the visitor's language — freeing staff for more complex needs." },
        { heading: "Practical example: healthcare professional", body: "A doctor or dentist has a constant flow of questions about appointments, insurance funds, prices. The AI assistant responds immediately, schedules appointments in the calendar and frees the secretary from repetitive calls — leading to greater patient satisfaction and less stress." },
        { heading: "Why it's different from old chatbots", body: "Old chatbots followed a strict decision tree: 'Press 1 for services'. Modern AI assistants understand natural language, respond meaningfully and learn over time. The conversation feels human — and that's the critical difference." },
        { heading: "How much does it cost and when does it pay off?", body: "An AI assistant for a small-medium business typically requires a small setup cost and a monthly operating subscription. Compare this with the cost of an employee or business lost from unanswered queries — and the return on investment quickly becomes evident." }
      ],
      conclusion: "If your business receives frequent queries, loses leads outside office hours or wants to improve service without extra staff costs, an AI assistant is the logical next step. Ask us how we can implement it for you."
    },
    "hotel-website-features": {
      title: "Hotel website: what it must include to bring direct bookings",
      metaDesc: "The 8 essential elements every hotel website must have to increase direct bookings and reduce commission costs.",
      tag: "Hotels & Tourism",
      readTime: "6 min read",
      icon: "🏨",
      intro: "Booking.com keeps 15–25% of every booking. For a hotel with €1,000/day in revenue, that means €150–250 going elsewhere. A good website can radically change this balance. But it's not enough to 'have' a website — you need the right one.",
      sections: [
        { heading: "1. Inline Booking Engine", body: "The most critical element. Visitors must be able to book a room without leaving your website. The booking engine must be fast, mobile-friendly and automatically synchronized with your availability." },
        { heading: "2. Premium Photography & Virtual Tours", body: "Images sell. Professional photography and, if possible, virtual room tours significantly increase the conversion of visitors into bookings. The visitor is buying an experience — let them see it." },
        { heading: "3. Multilingual Support", body: "If you have international guests — and what Greek hotel doesn't? — the website must be at least in Greek and English. Each language version must be separately SEO-optimized to appear in the corresponding markets." },
        { heading: "4. Social Proof & Reviews", body: "Integrate reviews from Google, TripAdvisor and Booking directly on the website. A visitor who reads positive reviews on your site is much more likely to book — without leaving to 'confirm' elsewhere." },
        { heading: "5. Visible 'Best Rate Guarantee'", body: "Show clearly that the best price is found on your website — not on Booking. This reduces the visitor's fear of 'missing out' by booking directly." },
        { heading: "6. Fast Loading & Mobile-First", body: "60%+ of hotel searches happen on mobile. If your website is slow or doesn't work properly on mobile, you're losing bookings without even knowing it." },
        { heading: "7. SEO for local and international searches", body: "The website must appear when someone searches 'hotel in Santorini' or 'hotels in Crete'. This requires strategic SEO — keyword research, structured data, Google Hotels integration." },
        { heading: "8. AI Concierge for 24/7 service", body: "An AI assistant on the website automatically answers guest questions — about prices, availability, facilities — even at midnight, helping convert interested visitors into bookings." }
      ],
      conclusion: "A modern hotel website is not an expense — it's a sales channel that pays back quickly. If you'd like to see what we can do for your property, contact us for a free analysis."
    },
    "local-seo-guide": {
      title: "Local SEO: How to dominate local Google searches",
      metaDesc: "A practical Local SEO guide for local businesses. Learn how to appear at the top of Google Maps and attract more local customers.",
      tag: "SEO & Marketing",
      readTime: "8 min read",
      icon: "📍",
      intro: "Every day, millions of people search Google for something they need nearby. 'Restaurants near me', 'dentist Thessaloniki', 'mechanic Athens'. If your business doesn't appear in these searches, you're losing customers who are searching for exactly what you offer.",
      sections: [
        { heading: "What is Local SEO?", body: "Local SEO is the optimization of your online presence to appear in local searches — primarily in Google Maps ('map pack') but also in organic results for searches with geographic intent." },
        { heading: "Step 1: Google Business Profile", body: "If you don't already have a complete and updated Google Business Profile, this is the first thing to do. Set the right categories, add photos, hours, services and actively request reviews from customers. GBP is the most powerful Local SEO tool." },
        { heading: "Step 2: NAP Consistency", body: "NAP = Name, Address, Phone. Your name, address and phone number must be exactly the same everywhere: GBP, website, Facebook, TripAdvisor, etc. Inconsistencies confuse Google and lower your ranking." },
        { heading: "Step 3: Local Keywords on the Website", body: "Your website must contain local keywords: 'plumber in Bristol', 'steakhouse Soho', 'hotel Crete'. This doesn't mean keyword stuffing — but natural integration in titles, descriptions and pages." },
        { heading: "Step 4: Local Reviews", body: "Reviews on Google are one of the most important ranking factors. Actively request reviews from satisfied customers — with QR code, email or SMS after their visit. Respond to every review, positive and negative." },
        { heading: "Step 5: Local Citations & Directories", body: "Register in local business directories with consistent details. These 'citations' strengthen your credibility in Google's eyes." },
        { heading: "How long does it take?", body: "Local SEO results aren't immediate — but they are lasting. Usually within 2–4 months of systematic work you start seeing improvement. In 6 months, you may dominate local searches in your sector." }
      ],
      conclusion: "Local SEO is one of the most cost-effective marketing investments for local businesses — because it targets people who are already searching for what you offer. Want us to analyze your position? Contact us."
    },
    "mobile-first-design": {
      title: "Mobile-First Design: Why your website must be designed for mobile first",
      metaDesc: "Learn why Mobile-First Design is critical for SEO and user experience — and how it directly impacts your business sales.",
      tag: "Web Design",
      readTime: "5 min read",
      icon: "📱",
      intro: "If you're designing a website in 2024 'for desktop' and then 'adapting' it for mobile, you're doing it wrong. Google knows it. And your customers feel it.",
      sections: [
        { heading: "What does Mobile-First Design mean?", body: "Mobile-First means design starts from mobile — the smallest, most challenging environment — and then expands to tablet and desktop. This approach ensures the mobile experience is exceptional, not just 'acceptable'." },
        { heading: "Why does it matter for SEO?", body: "Since 2019, Google uses Mobile-First Indexing — meaning it evaluates your website based on the mobile version, not desktop. If your mobile experience is poor, Google penalizes it with lower rankings — regardless of how good the desktop version is." },
        { heading: "What happens if you're not mobile-friendly?", body: "You lose customers: the average user abandons a website that doesn't load properly on mobile in less than 3 seconds. You lose ranking: Google pushes you down. You lose credibility: a website that looks 'broken' on mobile sends the wrong message about your business." },
        { heading: "The key elements of a Mobile-First site", body: "Fast loading (under 3 seconds on mobile), easy navigation with large buttons, text readable without zooming, forms and CTA buttons easily accessible, and images optimized for fast loading." },
        { heading: "How do I check?", body: "Google PageSpeed Insights (pagespeed.web.dev) — enter your URL and see the mobile score. Below 70 means a problem. Google Mobile-Friendly Test (search.google.com/test/mobile-friendly) — confirms whether Google considers your website mobile-friendly." }
      ],
      conclusion: "If you don't know whether your website is Mobile-First, open it on your phone now. If you struggle to navigate, your customers face the same problem. Talk to us — we offer a free mobile experience evaluation."
    },
    "digital-marketing-strategy": {
      title: "Digital Marketing Strategy: Where to invest your budget first",
      metaDesc: "A practical guide to deciding where to invest your digital marketing budget: SEO, Google Ads, Social Media or Email Marketing?",
      tag: "Digital Marketing",
      readTime: "9 min read",
      icon: "📊",
      intro: "'Where do I start?' is the question we hear most from business owners who want to invest in digital marketing. The market has many options — and without a clear strategy, the risk is spending without seeing results.",
      sections: [
        { heading: "First: Define your goal", body: "Before deciding on a channel, define what you want to achieve. More website visitors? More phone calls? Online sales? Each goal leads to a different strategy. Without a goal, you can't measure results." },
        { heading: "Google Ads: Results now, cost per click", body: "If you need immediate results — leads, sales, calls — Google Ads are the fastest solution. You pay per click, you appear at the top immediately. The downside? Stop paying, stop appearing." },
        { heading: "SEO: Later results, lasting value", body: "SEO doesn't bring results in a week — but it builds presence that lasts. Once you're on the first page for your keywords, you receive free organic traffic without paying per click. SEO is a long-term investment." },
        { heading: "Social Media: Brand visibility & engagement", body: "Social media (Facebook, Instagram, TikTok) are usually not the channel for immediate sales — but they're ideal for brand visibility, storytelling and building community. If targeting awareness buyers, organic social content + Meta Ads can work very well." },
        { heading: "Email Marketing: The underrated champion", body: "Email marketing has some of the highest ROI of all channels — but requires a list. If you already have customers, communicating with them via email is the cheapest and most effective retention tool." },
        { heading: "The ideal budget allocation", body: "For a new business without an audience: 60% Google/Meta Ads for immediate results, 30% SEO for long-term growth, 10% content/social. For an established business: larger percentage for SEO and email, less paid." }
      ],
      conclusion: "There's no 'right' strategy for everyone — there's the right strategy for you, based on your industry, goal and budget. Ask us for a free analysis and strategy proposal."
    }
  }
};

// ─── Page Component ──────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = articles[lang]?.[slug];
  if (!article) return { title: "Blog | Focus AI" };
  return {
    title: `${article.title} | Focus AI`,
    description: article.metaDesc,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);

  const article = articles[lang]?.[slug];
  if (!article) notFound();

  return (
    <div style={{ background: "#020202", minHeight: "100vh", color: "white" }}>
      <Navbar lang={lang} d={d} />

      {/* Header */}
      <header style={{ paddingTop: "10rem", paddingBottom: "4rem", borderBottom: "1px solid rgba(0,208,255,0.1)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ padding: "0.3rem 0.8rem", background: "rgba(0,208,255,0.1)", borderRadius: "50px", fontSize: "0.78rem", color: "#00d0ff", border: "1px solid rgba(0,208,255,0.2)" }}>
              {article.tag}
            </span>
            <span style={{ color: "#555", fontSize: "0.82rem" }}>{article.readTime}</span>
          </div>
          <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>{article.icon}</div>
          <h1 style={{ fontSize: "2.4rem", lineHeight: "1.3", marginBottom: "2rem", color: "white" }}>
            {article.title}
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#a0a0a0", lineHeight: "1.8" }}>{article.intro}</p>
        </div>
      </header>

      {/* Body */}
      <main style={{ padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          {article.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "1.4rem", color: "#00d0ff", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(0,208,255,0.15)" }}>
                {section.heading}
              </h2>
              <p style={{ color: "#b0b0b0", lineHeight: "1.9", fontSize: "1.05rem" }}>{section.body}</p>
            </div>
          ))}

          {/* Conclusion */}
          <div style={{ marginTop: "4rem", padding: "2.5rem", background: "rgba(0,208,255,0.05)", borderLeft: "4px solid #00d0ff", borderRadius: "0 12px 12px 0" }}>
            <p style={{ color: "#c0c0c0", lineHeight: "1.9", fontSize: "1.05rem", margin: 0 }}>{article.conclusion}</p>
          </div>
        </div>
      </main>

      {/* CTA */}
      <section style={{ padding: "6rem 0", background: "#050505" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="glass-card" style={{ maxWidth: "700px", margin: "0 auto", padding: "4rem", border: "1px solid rgba(0,208,255,0.2)" }}>
            <h2 style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>
              {lang === "el" ? "Έχετε ερωτήσεις;" : "Have questions?"}
            </h2>
            <p style={{ color: "#a0a0a0", marginBottom: "2.5rem", fontSize: "1.05rem" }}>
              {lang === "el"
                ? "Επικοινωνήστε μαζί μας — απαντάμε πάντα, γρήγορα και χωρίς δεσμεύσεις."
                : "Contact us — we always respond, quickly and without obligations."}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <ContactButton
                formTexts={d.contact.form}
                className="btn"
                style={{ background: "#00d0ff", color: "#000", padding: "0.9rem 2.5rem" }}
              >
                {d.nav.contact}
              </ContactButton>
              <a
                href={`/${lang}/blog`}
                className="btn"
                style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#a0a0a0", padding: "0.9rem 2.5rem" }}
              >
                ← {lang === "el" ? "Πίσω στο Blog" : "Back to Blog"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer d={d} />
    </div>
  );
}
