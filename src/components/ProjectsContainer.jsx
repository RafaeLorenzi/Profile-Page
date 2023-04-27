const ProjectsContainer = () => {
    return <section className="projects-container">
        <h2>Projects</h2>

        <a href="https://github.com/RafaeLorenzi/Simple-Chat" className="btn">Simple Chat</a>
        <p>
        Using Java I developed the Server and Client applications in small steps, adding features one at a time. The program runs on the console and each client is asked to enter its name. It also supports commands like:
        </p>
        <p>'/list' - show the list of user currently logged.</p>
        <p>'/whisper' - send a message to a specific client.</p>
        <p>'/quit' - self-explanatory</p>
        

        <a href="https://github.com/RafaeLorenzi/Map-Editor" className="btn">Map Editor</a>
        <p>Using the Simple GFX library developed at Academia de Código_ the challenge was to create a simple pixel editor that could save and load files.</p>
        <p>The program works based on a grid implemented with a bi-dimensional array. Each position on the array is capable of storing a certain state: painted, color, hovered, etc. It works with the keyboard. The save file registers each active cell state. The load files allows to recover a certain saved grid state.</p>
        

        <a href="https://github.com/RafaeLorenzi/Web-Server" className="btn">Web Server</a>
        <p>To create a simple Web Server that supported one client only.</p>
        <p>Using Java I developed a Web Server that served .html and image files to one client.</p>
        

        <a href="https://github.com/RafaeLorenzi/Java-Bank" className="btn">Java Bank</a>
        <p>Starting from our knowledge of the Java programming language, having a simple stand-alone program, the challenge was to create a full web enterprise application, using different methodologies, architectures and frameworks.</p>
        <p>The application started very simple, and was grown through various steps, that showed us not only what problems they solved, the decisions involved, but also how they integrated in the final product.

The first major step was to implement the Model-View-Controller Architecture, separating the UI from the business logic and data, using an intermediary layer.

Next we extracted business logic from the raw data by creating a Service layer, allowing us to more easily scale our application. Here we also transformed our project into a Maven project to more easily manage and scale our application.

The next logical step was to add persistence to our data with the introduction of relational databases. Because of the architecture that was implemented we were able to easily make our application agnostic to any specific RDBMS. During this step we were introduced to JPA and Hibernate.

The final step came with the introduction of the Spring framework and its modules, transforming our application into an API to be used as a back-end of our web application developed with HTML + CSS + JavaScript.</p>
    </section>
       
    
}

export default ProjectsContainer