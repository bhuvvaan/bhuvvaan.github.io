---
layout: page
title: PPTGaze - PPT Generation Service
date: 2023-12-12
description: Final course project for the course data center scale computing
img: assets/img/dcsc project proposal 2.png
importance: 1
category: work
---

    Team members:
    Bhuvvaan Punukolu
    Prathik Jain

# PPTGaze: PPT Generation Service

This repository includes the complete code to build a software service using Kubernetes that takes a video as input and returns a downloadable PPT presentation. Since the code is containerized using Docker, no additional requirements need to be installed. We recommend using Docker Desktop for running the Kubernetes service.

<div class="row justify-content-center">
  <div class="col-auto text-center">
    <!-- The inline style below limits the figure to 300px wide -->
    {% include figure.liquid 
      path="assets/img/dcsc project proposal 2.png" 
      title="Custom warehouse with four agents"
      class="img-fluid d-block mx-auto rounded z-depth-1" 
      style="max-width: 300px;"
    %}
  </div>
</div>
<div class="caption text-center">
   An architecture diagram of the entire service.
</div>

## Github Repo

[https://github.com/bhuvvaan/dcsc-final-projet](https://github.com/bhuvvaan/dcsc-final-projet)

## How to Use

1. Start the Kubernetes service on Docker Desktop.
2. Run the following command from the root folder to deploy all required components:

   ```bash
   bash deploy-all.sh
   ```

3. Open a browser and navigate to:

   ```
   http://localhost
   ```

4. Log in to the service.
5. Upload an MP4 video file when prompted.
6. After processing, you will receive a prompt to download the generated PPT file.

---

Feel free to reach out if any comments!

**Video with sound (recommended version)**

<div class="video-container">
   <iframe width="560" height="315" src="https://www.youtube.com/embed/hMuxLK65RBs?si=7jwvluxUQlenVFN9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<br />

<br /><br />
