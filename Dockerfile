FROM busybox:musl
WORKDIR /

COPY ./dist/subtitles-translate /ivavi/origin/subtitles-translate

CMD cp -fa /ivavi/origin/subtitles-translate /ivavi/prod
