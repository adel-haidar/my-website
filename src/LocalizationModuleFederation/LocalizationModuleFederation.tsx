import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const LocalizationModuleFederation = () => {
  const languageSwitcherExample: string = `
    // HostLanguageSwitcher.jsx
    import React from 'react';
    import { useTranslation } from 'react-i18next';

    export default function HostLanguageSwitcher() {
      const { i18n } = useTranslation();
      const changeLang = (lang) => {
        
      // 1) Tell i18next to switch
      i18n.changeLanguage(lang);

      // 2) Expose it globally
      window.currentLocale = lang;

      // 3) Fire an event so any MFE can listen
      window.dispatchEvent(
        new CustomEvent('currentLocaleChanged', { detail: lang })
      );
      };

      return (
        <div style={{ padding: 20 }}>
          <button onClick={() => changeLang('en')}>EN</button>
          <button onClick={() => changeLang('de')}>DE</button>
        </div>
      );
    }
  `

  const eventListenerExample: string = `
    window.addEventListener('currentLocaleChanged', e => {
    const newLang = e.detail;          // 'en' or 'de'
    translateService.use(newLang);     // ngx-translate or i18next
    });
  `

  const englishTranslations: string = `
    {
      "locale": "en",
      "translations": {
        "hello": "hello"
        "world": "world",
      }
    }
  `

  const germanTranslations: string = `
    {
      "locale": "de",
      "translations": {
        "hello": "Hallo"
        "world": "Welt",
      }
    }
  `

  const angularJsonBuildTimeExample: string = `
    "architect": {
        "build": {
          "builder": "ngx-build-plus:browser",
          "options": {
            "localize": true,
            ...
          "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "buildTarget": "my-mfe:build",
            "format": "json",
            "outputPath": "src/locale"
          }
        },
  `

  const nginxConfExample: string = `
    server {
      listen 4200;

      # disables specifying the port in absolute redirects issued by nginx
      port_in_redirect off;

      # Redirect root to /de/ for default German version
      location /my-mfe/ {
        rewrite ^/$ /my-mfe/de/ permanent;
      }

      # Location block for German version
      location /my-mfe/de {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /my-mfe/de/index.html;
      }

      # Location block for English version
      location /my-mfe/en {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /my-mfe/en/index.html;
      }
    }
  `
  return (
    <div className="max-w-4xl">
      <div className="h-40"/>
      <img src="/assets/localization_Module_Federation.jpg" alt="localization and module federation"/>
      <div className="bg-black text-white justify-center items-center flex flex-col">
        <div className="h-20"/>
        <div className="text-sm md:text-lg lg:text-5xl">
          <h1>Internationlization, Localization & Module Federation</h1>
        </div>
        <div className="h-20"/>
        <div className="text-justify text-sm md:text-lg lg:text-xl text-wrap">
          <p>
            Localization and internationalization are indispensable for any web application that is to be used in multiple countries.
            I have always heard these words together, but I only knew that they are used in the context of translating a frontend application.
            What is the difference between internationalization and localization?
          </p>
          <br/>
          <p>
            <strong>Internationalization (i18n):</strong> This is the process in which our application becomes capable of supporting more than one language.
            This process mainly includes the following steps:
          </p>
          <ul className="!list-disc !pl-5 !mt-2">
            <li className="!mb-5">Extracting texts from HTML pages into a separate key-value file, where the key is unique and the value is the extracted text.</li>
            <li>Styling the application in such a way that it is able to display texts in both directions, from right to left and vice versa.
              This is for languages that are written from right to left (such as Arabic, Farsi, Hebrew, etc.). </li>
          </ul>
          <br/>
          <p>
            <strong>Localization:</strong> The provision of a specific locale for a specific region.
            A locale includes texts in a specific language or language varieties (e.g., Swiss German or Canadian French).
            This affects the language itself, the spelling of dates, numbers, etc.;  the currency, etc.
          </p>
          <br/>
          <p>
            The aforementioned steps are very easy to implement with all common frontend frameworks in a standalone application.
            A library is installed, or the functionality even comes out of the box with the framework,
            and with a certain syntax, the texts in the locale files are referenced on the HTML page, and certain spellings are displayed according to the locale.
            The application provides an element in the UI for language switching in some way (e.g., buttons with flag icons for the different languages, drop-down menus, etc.).
            However, not all web applications are standalone applications. Many websites/portals are implemented as Microfrontends (MFE) in a Module Federation environment,
            where there is a portal framework that provides the basic structure of the website, such as header, footer, menu bar, etc. Each MFE is a module in this website.
            Example: An online banking portal that has a module for profile management, one for the overview of transactions or loans.
            This makes the internationalization and localization of the website significantly more complicated than with a standalone application.
            The question in this case is: which part should handle internationalization & localization in such an environment?
          </p>
          <br/>
          <h2><strong>The Modules Themselves:</strong></h2>
          <br/>
          <p>
            In this scenario, each MFE implements internationalization & localization itself.
            This approach has the following advantages: The remotes (MFEs) remain independent of the host.
            The module can also be used as an internationalized standalone application.
            In each MFE, this can be implemented in the way that is most appropriate and easiest for that MFE.
            However, this approach comes with a major disadvantage:
          </p>
          <br/>
          <p>
            <strong>Inconsistencies:</strong> If each MFE implements its own internationalization & localization, this can quickly lead to inconsistencies across the website and modules:
          </p>
          <ul className="!list-disc !pl-5 !mt-2">
            <li className="!mb-5">
              The smallest variation is a different selection of terms that are common across modules, such as buttons with the following texts: "Continue", "next step", "I agree", "I consent", etc.
            </li>
            <li className="!mb-5">
              Another form of inconsistency is the implementation of the language-switching functionality.  For example, one MFE might use buttons with flag images for the different languages, while another uses anchor elements with the respective country codes, etc.
            </li>
            <li>
              The most noticeable variation is when the MFEs offer different locales, for example, one module offers German, English, and Spanish, while another offers German, English, and French, or only German and English.
            </li>
          </ul>
          <br/>
          <h2><strong>The Host:</strong></h2>
          <br/>
          <p>
            The host can also provide the localization functionality for all remotes itself.
            The advantages of this approach are: The website has consistent wording across all modules.
            Also, general texts, such as "next", "cancel", "ok" can be stored in a general JSON file from which all modules can benefit.
            Each module then has one JSON file per locale in the host for the module-specific texts.
            Consistent language-switching functionality in the header of the host.
          </p>
          <br/>
          <p>
            However, this approach has the following disadvantages:
          </p>
          <ul className="!list-disc !pl-5 !mt-5">
            <li className="!mb-5">
              Storing the translation JSON files in the host leads to strong coupling between host and remotes.
              Thus, every text change for a remote requires a new version of the host to be deployed!
            </li>
            <li>
              This approach can lead to problems if not all modules are implemented with the same framework as the host.
            </li>
          </ul>
          <br/>
          <h2><strong>Shared Responsibility:</strong></h2>
          <br/>
          <p>
            In this approach, I try to benefit from the advantages of the two solution proposals mentioned above and avoid their disadvantages.
            Because in this approach, the host provides the language-switching function and possibly JSON files for general terms.
            This leads to a consistent user experience on the website.  But how exactly does this work?
            The host triggers a global event every time the language is changed, and the modules listen to this event and provide the desired locale.
            There are two options for delivering the locale:
          </p>
          <br/>
          <p>
            <strong>Build-Time Localization:</strong> The MFE delivers different bundles for the respective locales during the build process.  For example, if the user selects the Spanish language, the corresponding bundle is loaded via the URL:
            <pre><code>https://www.my-domain/my-host/my-mfe/es</code></pre>
          </p>
          <br/>
          <p>
            The advantage of build-time localization is better performance and faster usability of the application, because everything is "already there" and the application only needs to display the page.  The disadvantages, however, are:
          </p>
          <br/>
          <ul className="!list-disc !pl-5 !mt-5">
            <li className="!mb-5">Long build time: The more locales offered, the longer the application will take to build.  However, this is not noteworthy for small applications and MFEs.</li>
            <li className="!mb-5">High number of bundles: The number of bundles per MFE grows with the number of languages offered; if the website offers three languages, there are three bundles per remote.</li>
            <li className="!mb-5">Complex Routing: A URL for the host looks like this:
                <pre><code>https://www.my-domain/my-host/</code></pre>
                Each module has a unique prefix. For example:
                <pre><code>https://www.my-domain/my-host/my-mfe/</code></pre>
                If multiple locales are offered, the country code is added to the URL:
                <pre><code>https://www.my-domain/my-host/my-mfe/de</code></pre>
                This can make routing in the website relatively more complex or lead to hardcoded entries in the host for the various remotes and their respective locales, let alone the routing for the components within the module itself
            </li>
            <li>A language change action requires a page refresh.</li>
          </ul>
          <p><strong>Runtime Localization:</strong>In this case, the MFE delivers only one bundle.
            This makes routing significantly simpler and naturally leads to a faster build.
            However, this approach also has its disadvantages:</p>
          <ul className="!list-disc !pl-5 !mt-5">
            <li>Larger bundles: The JSON files for the different locales are not treeshakable.
              This means that these files are not minimized during the build and end up in the dist folder as they are.
              This leads to large bundles for websites with many texts and locales.
            </li>
            <li>
              Performance: A runtime translation of the modules logically leads to poorer performance.
            </li>
          </ul>
          <br/>
          <p><strong>The good news is:</strong> The user hopefully only changes the language once on the website, meaning that
            no matter which approach is pursued, the disadvantage of this approach is only experienced once.
          </p>
          <br/>
          <h2><strong>Personal Opinion & Recommendation:</strong></h2>
          <br/>
          <p>
            In my opinion, the last approach is the one with the fewest compromises.
            With this approach, the modules are translated at runtime and do not have their own language change function,
            but they still have a certain independence from the host and are loosely coupled, whereby a uniform language
            and a single language change function across all modules on the website are guaranteed.
            You also have a single bundle per module, and the complexity of routing in the website is not increased.
          </p>
          <br/>
          <h2><strong>Code Examples:</strong></h2>
          <br/>
          <p>No code examples are mentioned here for internationalization and localization in a standalone application, as this can be found everywhere.
              In the host, you can have a simple component for the language-switching function in the header:</p>
          <br/>
          <h3><strong>Runtime Translation</strong></h3>
          <br/>
          <div className="my-8 bg-gray-800 p-4 rounded-lg"> {/* Add some styling to the container */}
            <h2 className="text-2xl text-white mb-4">Language Switching in Host</h2>
            <SyntaxHighlighter language="jsx" style={atomOneDark} showLineNumbers={true}>
              {languageSwitcherExample}
            </SyntaxHighlighter>
          </div>
          <br/>
          <p>
            In a remote, the language change event can be subscribed to in AppComponent as follows:
          </p>
          <br/>
          <div className="my-8 bg-gray-800 p-4 rounded-lg"> {/* Add some styling to the container */}
            <h2 className="text-2xl text-white mb-4">Event Listener in Remote</h2>
            <SyntaxHighlighter language="jsx" style={atomOneDark} showLineNumbers={true}>
              {eventListenerExample}
            </SyntaxHighlighter>
          </div>
          <br/>
          <p>
            Translation Files:
          </p>
          <br/>
          <div className="my-8 bg-gray-800 p-4 rounded-lg"> {/* Add some styling to the container */}
            <h2 className="text-2xl text-white mb-4">English Translations</h2>
            <SyntaxHighlighter language="json" style={atomOneDark} showLineNumbers={true}>
              {englishTranslations}
            </SyntaxHighlighter>
          </div>
          <br/>
          <div className="my-8 bg-gray-800 p-4 rounded-lg"> {/* Add some styling to the container */}
            <h2 className="text-2xl text-white mb-4">German Translations</h2>
            <SyntaxHighlighter language="json" style={atomOneDark} showLineNumbers={true}>
              {germanTranslations}
            </SyntaxHighlighter>
          </div>
          <br/>
          <h3><strong>Build-Time Localization: </strong></h3>
          <br/>
          <p>In an Angular MFE, the bundles can be configured as follows:</p>
          <br/>
          <div className="my-8 bg-gray-800 p-4 rounded-lg"> {/* Add some styling to the container */}
            <h2 className="text-2xl text-white mb-4">In angular.json</h2>
            <SyntaxHighlighter language="json" style={atomOneDark} showLineNumbers={true}>
              {angularJsonBuildTimeExample}
            </SyntaxHighlighter>
          </div>
          <br/>
          <div className="my-8 bg-gray-800 p-4 rounded-lg"> {/* Add some styling to the container */}
            <h2 className="text-2xl text-white mb-4">In angular.json</h2>
            <SyntaxHighlighter language="json" style={atomOneDark} showLineNumbers={true}>
              {nginxConfExample}
            </SyntaxHighlighter>
          </div>
          <br/>
          <h2><strong>Conclusion:</strong></h2>
          <br/>
          <p>When it comes to localization & internationalization in Module Federation, the following criteria should be considered: </p>
          <ul className="!list-disc !pl-5 !mt-5">
            <li className="!mb-5">Consistency of locales and language and word choice across all modules on the website.</li>
            <li className="!mb-5">Loose coupling and independence of the modules from the host.</li>
            <li>Build time of the modules and performance.</li>
          </ul>
        </div>
      </div>
      <div className="h-40"/>
    </div>
);
};

export default LocalizationModuleFederation;