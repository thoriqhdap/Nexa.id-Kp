<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
        
        <!-- Google Translate Widget -->
        <script type="text/javascript">
            function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                    pageLanguage: 'id',
                    includedLanguages: 'id,en',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                }, 'google_translate_element');
            }
        </script>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        
        <style>
            /* Hide the default Google Translate top bar and elements */
            iframe.VIpgJd-yDtrds-L1X3M-wN1158-bN97Pc,
            iframe.skiptranslate,
            .goog-te-banner-frame,
            #goog-gt-tt,
            .goog-te-spinner-pos {
                display: none !important;
                visibility: hidden !important;
            }
            body {
                top: 0px !important;
            }
            /* Only hide google translate elements that are not inside our navbar layout */
        </style>
    </head>
    <body class="font-sans antialiased">
        <div id="google_translate_element" style="display: none;"></div>
        @inertia
    </body>
</html>
