function footer(containerId) {

    const container = document.getElementById(containerId);
    if (!container) {
        console.error('footer container element "#footer" not found.');
        return;
    }

    const template = `<div class="container">
            <div class="row">
                <!-- Column 1: Company Info -->
                <div class="col-md-4 text-center text-md-start">
                    <h3>NAST</h3>
                    <p>Empowering businesses with next-gen web development, AI-driven data
                        analytics, AI Model Training & Deployment and scalable enterprise solutions.
                    </p>
                </div>

                <!-- Column 2: Contact Details -->
                <div class="col-md-4 text-center">
                    <address><i class="bi bi-geo-alt"></i>

                        Ground Floor, A-45, Vidhya Nagar, Opp- Patalia Hospital,
                        Near Railway Crossing, Jagatpura Jaipur- 302017
                    
                    </address>
                    <p><i class="bi bi-telephone"></i> 8955530880</p>
                    <p><i class="bi bi-envelope"></i> nexustech@nast.in</p>
                    <p><i class="bi bi-globe"></i> nast.in</p>
                </div>

                <!-- Column 3: Quick Links -->
                <div class="col-md-4 text-center text-md-end">
                    <h5>Quick Links</h5>
                    <nav>
                        <a href="#about"
                           class="text-white d-block">About Us</a>
                        <a href="#careers"
                           class="text-white d-block">Careers</a>
                        <a href="#blog"
                           class="text-white d-block">Blog</a>
                        <a href="#privacy"
                           class="text-white d-block">Privacy Policy</a>
                        <a href="#terms"
                           class="text-white d-block">Terms of Service</a>
                    </nav>
                </div>
            </div>

            <div class="text-center mt-3">
                <p>💡 AI-Powered Transformation: Seamless development, secure data management, and
                    intelligent automation—driving the future of digital innovation.</p>
                <p>© Copyright 2025. All Rights Reserved.</p>
            </div>
        </div>`


    container.innerHTML = template
}


function createFooter(containerId) {
    footer(containerId)
}