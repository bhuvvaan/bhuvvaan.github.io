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

Feel free to reach out for any comments!

**Video with sound (recommended version)**

<div class="video-container">
    <iframe src="https://www.youtube.com/watch?v=hMuxLK65RBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br />
