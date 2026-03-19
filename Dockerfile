# ====================================================================== base ======================================================================
FROM node:22.15.1-bookworm-slim AS root

ENV FORCE_COLOR=1

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y curl net-tools

RUN npm i --location=global npm@latest
RUN npm i --location=global npm-check-updates serve

# --------------------------------------------------------------------------------------------------------------------------------------------------

FROM root AS nonroot

RUN userdel -r node
RUN groupadd --gid 1000 nonroot && useradd --uid 1000 --gid nonroot --shell /bin/bash --create-home nonroot

USER nonroot
WORKDIR /home/nonroot/app

# ====================================================================== dev =======================================================================

FROM nonroot AS nonroot-dev

EXPOSE 80
