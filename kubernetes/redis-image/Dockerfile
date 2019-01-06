# Use an existing Docker Image as base
FROM alpine
#FROM -Instruction telling Docker Server what to do
#FROM is used to specify what docker image we want to use as the base

#Download and install the dependency
RUN apk add --update redis
#RUN - Instruction telling Docker Server what to do
#RUN is used to execute some command while we are preparing our custom image
#Tell the image what to do when it starts as a container
CMD ["redis-server"]
#CMD - Instruction telling Docker Server what to do
#CMD is used to specify what should be executed when our image is used to fire up a brand new container